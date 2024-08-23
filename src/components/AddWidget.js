import React, { useState } from 'react';
import widgetsData from './widgets.json';

const AddWidget = ({ setDashboardWidgets, dashboardWidgets, onClose }) => {
  const [availableWidgets, setAvailableWidgets] = useState(widgetsData);
  const [newWidget, setNewWidget] = useState({ heading: '', name: '', graph: '' });

  const handleAddWidget = (widget) => {
    if (!dashboardWidgets.find((w) => w.id === widget.id)) {
      setDashboardWidgets([...dashboardWidgets, widget]);
      alert(`Widget "${widget.heading}" added to the dashboard!`);
    } else {
      alert(`Widget "${widget.heading}" is already on the dashboard!`);
    }
  };

  const handleRemoveWidget = (widget) => {
    setDashboardWidgets(dashboardWidgets.filter((w) => w.id !== widget.id));
    alert(`Widget "${widget.heading}" removed from the dashboard!`);
  };

  const handleCreateWidget = () => {
    const newId = availableWidgets.length + 1;
    const widget = { ...newWidget, id: newId };

    setAvailableWidgets([...availableWidgets, widget]);
    setNewWidget({ heading: '', name: '', graph: '' });
    alert(`New widget "${widget.heading}" created!`);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Widgets</h2>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Available Widgets</h3>
        <ul className="space-y-4 mb-6">
          {availableWidgets.map((widget) => (
            <li key={widget.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <div>
                <h4 className="text-lg font-medium text-gray-900">{widget.heading}</h4>
                <p className="text-sm text-gray-600">{widget.name}</p>
              </div>
              <div>
                {dashboardWidgets.find((w) => w.id === widget.id) ? (
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleRemoveWidget(widget)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    onClick={() => handleAddWidget(widget)}
                  >
                    Add
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Create New Widget</h3>
        <form className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700">Heading</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={newWidget.heading}
              onChange={(e) => setNewWidget({ ...newWidget, heading: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={newWidget.name}
              onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700">Graph</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={newWidget.graph}
              onChange={(e) => setNewWidget({ ...newWidget, graph: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={handleCreateWidget}
          >
            Create Widget
          </button>
        </form>

        <button
          className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddWidget;
