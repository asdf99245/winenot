import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <nav>
        <Link href='/'>
          <Logo>
            <Image src='/icons/logo.svg' alt='로고' fill />
          </Logo>
        </Link>
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

const Logo = styled.h1`
  width: 80px;
  height: 80px;
  position: relative;
`;
