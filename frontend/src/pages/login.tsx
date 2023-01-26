import styled from 'styled-components';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar } from '@/components/common';

function login() {
  const { data: session } = useSession();

  return (
    <Container>
      {session && <span>로그인되어있음</span>}
      <Avatar size='lg' />
      <GoogleLoginButton onClick={() => signIn()}>
        <Image src='/icons/google.svg' alt='구글 로그인' width={30} height={30} />
        <span>구글로 시작하기</span>
      </GoogleLoginButton>
    </Container>
  );
}

export default login;

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  flex: 1;
  height: 100%;
`;

const GoogleLoginButton = styled.button`
  ${({ theme }) => theme.common.flexCenter};
  background-color: ${({ theme }) => theme.colors.gray3};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 8px;
  padding: 8px 20px;
  gap: 10px;
  margin-top: 20px;
`;
