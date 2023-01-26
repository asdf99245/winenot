import { useEffect } from 'react';
import styled from 'styled-components';
import { useSession, signIn } from 'next-auth/react';
import LoginButton from '@/components/common/LoginButton';
import { useRouter } from 'next/router';

function login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && router.isReady) {
      if (session.user) router.push(`/profile/${session.user.name}`);
    }
  }, [session, router]);

  return (
    <Container>
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
