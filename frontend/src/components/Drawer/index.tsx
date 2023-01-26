import Link from 'next/link';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Avatar, IconButton } from '../common';

interface StyledContainerProps {
  isOpen: boolean;
}

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container isOpen={isOpen}>
      <Buttons>
        <li>
          <Link href='/login'>
            <Avatar size='sm' />
          </Link>
        </li>
        <li>
          <IconButton src='/icons/menu.svg' onClick={toggleDrawer} />
        </li>
      </Buttons>
      <nav>
        {isOpen && (
          <Menus>
            <li>
              <Link href='/products'>Stores & Producers</Link>
            </li>
            <li>Regions</li>
            <li>Vintage in Decades</li>
            <li>Find your Partner!</li>
          </Menus>
        )}
      </nav>
    </Container>
  );
}

export default Drawer;

const Container = styled.div<StyledContainerProps>`
  ${({ theme }) => theme.common.flexColumn};
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  width: 70px;

  transition: all 0.5s ease-in;

  ${(props) =>
    props.isOpen &&
    css`
      background-color: #f4d59f;
      width: 250px;
    `}
`;

const Buttons = styled.ul`
  ${({ theme }) => theme.common.flexColumn};
  gap: 12px;
`;

const Menus = styled.ul`
  ${({ theme }) => theme.common.flexColumn};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 60px;

  li {
    width: 100%;
    cursor: pointer;
    text-overflow: hidden;
  }

  li + li {
    margin-top: 50px;
  }
`;
