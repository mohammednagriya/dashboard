import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddWidget from './components/AddWidget';
import { widgets as initialWidgets } from './data/widgetsData';

function App() {
  const [dashboardWidgets, setDashboardWidgets] = useState([]);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Dashboard widgets={dashboardWidgets} />} 
        />
        <Route 
          path="/add-widget" 
          element={
            <AddWidget 
              initialWidgets={initialWidgets} 
              setDashboardWidgets={setDashboardWidgets} 
              dashboardWidgets={dashboardWidgets} 
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
