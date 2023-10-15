import { Route, Routes } from 'react-router-dom';
import { PATH } from '../constants/paths';

import { MainPage } from '@pages/MainPage';
import { LoginPage } from '@pages/LoginPage';

function Router() {
  return (
    <Routes>
      <Route index path={PATH.root} element={<MainPage />} />
      <Route path={PATH.login} element={<LoginPage />} />
      <Route path={PATH.signup} />
      <Route path={PATH.search} />
      <Route path={PATH.community} />
      <Route path={PATH.match} />
    </Routes>
  );
}

export default Router;
