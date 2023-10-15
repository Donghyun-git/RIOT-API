import { PageLayout } from '../../../layout';

import { useMovePage } from '@hooks/useMovePage';

import * as S from './style';

const Header = () => {
  const { handleMoveCommunity, handleMoveMatch, handleMoveSearch } = useMovePage();
  const { handleMoveLogin } = useMovePage();
  return (
    <S.Wrapper>
      <S.Header>
        <PageLayout>
          <div className="header-logo">
            <h1>HEY! DUO!</h1>
            {/* <img src="" alt="" /> */}
          </div>
          <div className="header-auth">
            <div className="loginBtn">
              <button onClick={handleMoveLogin}>
                <span>로그인</span>
              </button>
            </div>
            <div className="signupBtn">
              <button>
                <span>회원가입</span>
              </button>
            </div>
          </div>
        </PageLayout>

        <nav className="header-nav">
          <div className="nav-background"></div>
          <PageLayout>
            <ul>
              <li>
                <div onClick={handleMoveSearch}>
                  <span>소환사 찾기</span>
                </div>
                <ul className="nav-sub">
                  <li>
                    <div>
                      <span>소환사 찾기</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div onClick={handleMoveCommunity}>
                  <span>커뮤니티</span>
                </div>
                <ul className="nav-sub">
                  <li>
                    <div>
                      <span>팀원 모집</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>자유게시판</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div onClick={handleMoveMatch}>
                  <span>듀오 찾기</span>
                </div>
                <ul className="nav-sub">
                  <li>
                    <div>
                      <span>2인 랭크</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </PageLayout>
        </nav>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
