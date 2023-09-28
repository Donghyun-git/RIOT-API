import { Children, cloneElement, ReactNode, ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';

type CommonProps = {
  children: ReactNode;
};

const Common = ({ children }: CommonProps) => {
  return (
    <div>
      <Header />
      {Children.map(children, (child) => cloneElement(child as ReactElement, {}))}
      <Footer />
    </div>
  );
};

export default Common;
