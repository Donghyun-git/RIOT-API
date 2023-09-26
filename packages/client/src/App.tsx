import React from 'react';
import Router from './routes/Router';

import './App.css';

function App() {
  return (
    <div>
      <React.Suspense fallback>
        <Router />
      </React.Suspense>
    </div>
  );
}

export default App;
