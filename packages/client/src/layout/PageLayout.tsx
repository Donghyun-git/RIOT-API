import { ReactNode, cloneElement, Children, ReactElement } from 'react';
import { Container } from './style';

export interface ChildProps {
  children: ReactNode;
}

const PageLayout = ({ children }: ChildProps) => {
  return (
    <Container>
      {Children.map(children, (child) => cloneElement(child as ReactElement, {}))}
    </Container>
  );
};

export default PageLayout;
