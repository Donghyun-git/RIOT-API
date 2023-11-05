import { FormProvider, useForm } from 'react-hook-form';

import { useSearchStore } from '@store/useSearchStore';
import { useGetSummonerQuery } from '@services/useGetSummonerQuery';
import { SummonerGetFetchResponseProps, summonerGetFetch } from '@api/search/summonerGetFetch';
import { Tooltip } from '@components/Tooltip';
import { PageLayout } from '../../layout';

import * as S from './style';

const MainPage = () => {
  const method = useForm({
    values: {
      search: '',
    },
  });

  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = method;

  const setSearchInfo = useSearchStore((state) => state.setSearchInfo);

  const handleSearchSubmit = handleSubmit(async () => {
    try {
      const res = await summonerGetFetch(getValues('search'));

      setSearchInfo(res.data);
    } catch (e: any) {
      const {
        response: {
          data: { status },
        },
      } = e;
      console.error(e);

      if (status === 404) {
        alert('등록되지 않은 소환사에요!');
        return;
      }
    }
  });

  return (
    <FormProvider {...method}>
      <S.Wrapper>
        <S.SearchWrapper>
          <PageLayout>
            <form className="search" onSubmit={handleSearchSubmit}>
              {errors?.search && <Tooltip message={errors.search.message} />}
              <span>KR</span>
              <input
                type="text"
                placeholder="소환사 이름을 입력해주세요."
                {...register('search', {
                  required: '소환사 이름을 입력해주세요!',
                  minLength: {
                    value: 3,
                    message: '3글자 이상 입력해주세요!',
                  },
                })}
              />
              <button type="submit" className="search-submit">
                <img src="/icons/search.svg" alt="검색 아이콘" />
              </button>
            </form>
          </PageLayout>
        </S.SearchWrapper>
      </S.Wrapper>
    </FormProvider>
  );
};

export default MainPage;
