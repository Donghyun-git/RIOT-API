import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserStoreActions {
  setUserInfo: () => void; //state 타입정의
  setAccessToken: (accesstoken: string) => void;
  removeUserInfo: () => void;
}

//login response 타입정의 필요
export const useUserStore = create<UserStoreActions>()(
  persist(
    (set) => ({
      accesstoken: '',
      setUserInfo: (state) =>
        set({
          ...state,
        }),
      setAccessToken: (accesstoken) =>
        set({
          accesstoken,
        }),
      removeUserInfo: () =>
        set(
          ({ setAccessToken, setUserInfo, removeUserInfo }) => ({
            setAccessToken,
            setUserInfo,
            removeUserInfo,
          }),
          true,
        ),
    }),
    {
      name: 'auth',
    },
  ),
);
