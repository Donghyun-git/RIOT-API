import PageLayout from '@layout/PageLayout';

import { LoginWrapper } from './style';

const LoginPage = () => {
  return (
    <div>
      <PageLayout>
        <LoginWrapper>
          <form>
            <span>
              <label htmlFor="email"></label>
            </span>
            <input type="text" id="email" />
            <span>
              <label htmlFor="password"></label>
            </span>
            <input type="password" id="password" />
          </form>
        </LoginWrapper>
      </PageLayout>
    </div>
  );
};

export default LoginPage;
