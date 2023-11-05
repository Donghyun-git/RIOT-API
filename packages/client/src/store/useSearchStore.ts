import { SummonerGetFetchResponseProps } from '@api/search/summonerGetFetch';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SearchStore = SummonerGetFetchResponseProps;
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
