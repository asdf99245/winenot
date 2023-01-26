import styled from 'styled-components';
import { useSession, signIn, signOut } from 'next-auth/react';
import LoginButton from '@/components/common/LoginButton';

function login() {
  const { data: session } = useSession();

  return (
    <Container>
      {session && <span>로그인되어있음</span>}
      <LoginButton
        type='google'
        src='/icons/google.svg'
        text='구글로 시작하기'
        onClick={() => signIn('google', { callbackUrl: `/profile/test` })}
      />
      <LoginButton type='kakao' src='/icons/kakao.svg' text='카카오로 시작하기' onClick={() => signIn('kakao')} />
      <LoginButton type='naver' src='/icons/naver.svg' text='네이버로 시작하기' onClick={() => signIn('naver')} />
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
  color: ${({ theme }) => theme.colors.black1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.colors.gray3};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 8px;
  padding: 8px 20px;
  gap: 10px;
  margin-top: 20px;
  width: 400px;
`;
