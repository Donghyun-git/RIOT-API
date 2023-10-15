import { useQuery } from '@tanstack/react-query';
import { useSearchStore } from '@store/useSearchStore';
import { summonerGetFetch, SummonerGetFetchResponseProps } from '@api/search/summonerGetFetch';

export type GetSummonerDataType = SummonerGetFetchResponseProps;

export const useGetSummonerQuery = (summoner: string) =>
  useQuery(['getSummoner'], {
    queryFn: async () => {
      const setSearchInfo = useSearchStore((state) => state.setSearchInfo);

      const res = await summonerGetFetch(summoner);

      setSearchInfo(res.data);

      return {
        ...res.data,
      };
    },
  });
