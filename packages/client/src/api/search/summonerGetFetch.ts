import { customAuthFetch } from '@api/common';

export interface SummonerGetFetchResponseProps {
  /**
   * 매 요청 시 보내야 할 유저 accountId - RSA 암호화.
   * - Encrypted account ID. Max length 56 characters.
   */
  accountId: string;

  /**
   * 유저 아이콘
   * - ID of the summoner icon associated with the summoner.
   */
  profileIconId: number;

  /**
   * "유저가 최종으로 수정된 시간을 에포크 밀리초로 지정한 날짜입니다. 다음 이벤트들이 이 타임스탬프를 업데이트합니다: 유저 이름 변경, 유저 레벨 변경, 또는 프로필 아이콘 변경."
   * - Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
   */
  revisionDate: number;

  /**
   * 유저 닉네임
   */
  name: string;

  /**
   * 암호화 된 summoner ID
   * - Encrypted summoner ID. Max length 63 characters.
   */
  id: string;

  /**
   * 암호화 된  PUUID
   * - Encrypted PUUID. Exact length of 78 characters.
   */
  puuid: string;

  /**
   * 해당 유저와 관련된 소환사 레벨
   * - Summoner level associated with the summoner.
   */
  summonerLevel: number;
}

export const summonerGetFetch = (summoner: string) =>
  customAuthFetch.get<SummonerGetFetchResponseProps>(`/search/${summoner}`);
