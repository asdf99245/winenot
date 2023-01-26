import styled from 'styled-components';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  width: 100%;
`;

const Main = styled.main`
  ${({ theme }) => theme.common.flexColumn}
  width:100%;
  height: 100%;
  min-height: calc(100vh - 100px);
`;
