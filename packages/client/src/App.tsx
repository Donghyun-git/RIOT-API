import Routes from './routes/Router.tsx';

import React from 'react';
import { Common } from '@components/Common';

function App() {
  return (
    <div>
      <React.Suspense fallback>
        <Common>
          <Routes />
        </Common>
      </React.Suspense>
    </div>
  );
}

export default App;
