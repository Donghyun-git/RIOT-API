import axios from 'axios';
import { redirectDocument } from 'react-router-dom';

// import { useUserStore } from '../store/useUserStore';
import { PATH } from '../constants/paths';

export const baseURL = import.meta.env.VITE_APP_BASE_URL;

export const customAuthFetch = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 세션이 만료되어 어플리케이션이 새로고침 될거기 때문에
 * 이후에 들어오는 response들은 모두 세션 만료를 무시한다.
 */
let isExitApplication = false;

customAuthFetch.interceptors.request.use((config) => {
  if (isExitApplication) {
    throw new axios.Cancel('Application Exit!');
  }

  // const { accesstoken } = useUserStore.getState();

  // config.headers.set('accesstoken', accesstoken, true);

  return config;
});

customAuthFetch.interceptors.response.use((res) => {
  if (!isExitApplication && res.data?.result.status.startsWith('8')) {
    alert(
      '이용시간이 만료되었거나 다른 기기에서 로그인되어 자동로그아웃 되었습니다. 서비스를 계속 이용하시려면 다시 로그인 하시기 바랍니다!',
    );

    // useUserStore.persist.clearStorage();

    location.href = PATH.root;
    isExitApplication = true;
    return res;
  }

  redirectDocument(PATH.root);

  return res;
});
