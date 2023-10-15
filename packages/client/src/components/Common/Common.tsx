import { Children, cloneElement, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

import { ChildProps } from '../../layout/PageLayout';

const Common = ({ children }: ChildProps) => {
  const { pathname } = useLocation();

  return pathname !== '/login' ? (
    <>
      <Header />
      {Children.map(children, (child) => cloneElement(child as ReactElement, {}))}
      <Footer />
    </>
  ) : (
    Children.map(children, (child) => cloneElement(child as ReactElement, {}))
  );
};

export default Common;
