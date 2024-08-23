import React, { useState } from 'react';
import AddWidget from './AddWidget';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dashboardWidgets, setDashboardWidgets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWidgets = dashboardWidgets.filter((widget) =>
    widget.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex space-x-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Add Widget
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWidgets.map((widget) => (
          <div key={widget.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{widget.heading}</h2>
            <p className="text-gray-600 mb-4">{widget.name}</p>
            <div className="h-48 bg-gray-200 rounded-lg flex justify-center items-center">
              <span className="text-gray-500">{widget.graph} Graph</span>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => setDashboardWidgets(dashboardWidgets.filter((w) => w.id !== widget.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <AddWidget
          setDashboardWidgets={setDashboardWidgets}
          dashboardWidgets={dashboardWidgets}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
