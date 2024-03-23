import React from 'react';
import ReactDOM from 'react-dom/client';
import BloodPressureResultCardComponent from './BPResultCardComponent'
import ResultCardComponent from './ResultCardComponent';
import ResultsPage from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ResultsPage />
  </React.StrictMode>
);
