import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SearchStore {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: Date | number;
  summonerLevel: number;
}

export interface SearchStoreActions {
  setSearchInfo: (state: SearchStore) => void; //state 타입정의
}

export const useSearchStore = create<Partial<SearchStore> & SearchStoreActions>()(
  persist(
    (set) => ({
      setSearchInfo: (state: SearchStore) =>
        set({
          ...state,
        }),
    }),
    {
      name: 'search',
    },
  ),
);
