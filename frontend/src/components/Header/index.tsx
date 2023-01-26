import styled from 'styled-components';
import Avatar from '../common/Avatar';
import IconButton from '../common/IconButton';

function Header() {
  return (
    <Container>
      <nav>
        <h1>로고위치</h1>
        <Menus>
          <li>
            <Avatar size='sm' />
          </li>
          <li>
            <IconButton src='/icons/menu.svg' />
          </li>
        </Menus>
      </nav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  height: 100px;

  nav {
    ${({ theme }) => theme.common.flexSpaceBetween};
    height: 100%;
    margin: 0 20px;
  }
`;

const Menus = styled.ul`
  ${({ theme }) => theme.common.flexCenterColumn};
  gap: 8px;
`;
