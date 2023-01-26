import styled from 'styled-components';
import { Searchbar } from '@/components/common';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container>
        <MainLogo>
          <Image src='icons/logo.svg' alt='메인 로고' fill />
        </MainLogo>
        <Searchbar width={600} placeholder='와인을 검색하세요.' />
      </Container>
    </>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  flex: 1;
  height: 100%;
`;

const MainLogo = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  position: relative;
`;
