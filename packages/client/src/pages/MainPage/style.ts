import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
`;

export const SearchWrapper = styled.section`
  width: 100%;

  background-image: url('https://cdn.dak.gg/lol/images/LandingBackground/main_04.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 120px 0;
  text-align: center;

  & .search {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));

    & span {
      --tw-text-opacity: 1;
      color: rgba(237, 103, 103, var(--tw-text-opacity));
      padding: 14.5px 20px;
      background-color: var(--gray200);
    }

    & input {
      width: 80%;
      padding: 14.5px 16px 14.5px 12px;
    }

    & button {
      width: 20px;
      height: 20px;
      margin-right: 16px;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
