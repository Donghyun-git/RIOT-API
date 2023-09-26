import { Route, Routes } from 'react-router-dom';
import { PATH } from '../constants/paths';

import { MainPage } from '../pages/MainPage';

function Router() {
  return (
    <Routes>
      <Route index path={PATH.root} element={<MainPage />} />
    </Routes>
  );
}

export default Router;
