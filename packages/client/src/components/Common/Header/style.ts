import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  background-color: var(--gray800);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  padding-top: 22px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .header-logo {
    & h1 {
      font-size: 36px;
      font-weight: 500;
      color: #fff;
      letter-spacing: 2px;
    }
  }

  & .header-auth {
    display: flex;
    justify-content: center;
    align-items: center;

    & div {
      border: 1px solid var(--gray400);
      border-radius: 4px;
      margin-right: 12px;
      transition: all 0.1s ease-in;

      & button {
        & span {
          width: 70px;
          color: #fff;
          display: block;
          font-size: 12px;
          line-height: 100%;
          padding: 6px 2px;
        }
      }

      &:hover {
        background-color: var(--gray700);
      }
    }
  }

  & .header-nav {
    position: relative;
    margin-top: 22px;
    height: 60px;
    overflow: hidden;

    &:hover {
      overflow: visible;
      transition: all 3s ease;
    }

    &:after {
      width: 100%;
      position: absolute;
      background-color: var(--gray800);
      content: '';
      height: 150px;
      left: 0;
      top: 60px;
      z-index: 9;
    }

    & .nav-background {
      background: rgba(0, 0, 0, 0.25);
      height: 60px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    & ul {
      display: flex;

      & li {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        list-style: none;
        padding: 0;
        z-index: 10;
        width: 125px;

        & span {
          color: #fff;
          font-size: 16px;
          line-height: 100%;
          position: relative;
          white-space: nowrap;
          cursor: pointer;
        }

        > div {
          align-items: center;
          display: inline-flex;
          justify-content: center;
          padding-bottom: 20px;
          padding-top: 20px;
          text-align: center;
        }

        & .nav-sub {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding-top: 4px;
          margin-top: 4px;

          & li {
            & div {
              padding: 0;

              & span {
                width: 125px;
                color: #bbb;
                display: block;
                font-size: 14px;
                line-height: 100%;
                padding-bottom: 20px;
                padding-top: 20px;
                text-align: center;
                text-decoration: none;
                transition: all 0.1s ease-in;

                &:hover {
                  background-color: var(--gray600);
                  border-radius: 8px;
                  color: #bbb;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }
  }
`;
