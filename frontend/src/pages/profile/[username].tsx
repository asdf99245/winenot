import styled from 'styled-components';
import { useRouter } from 'next/router';

function Profile() {
  const router = useRouter();
  const { username } = router.query;

  return <Container>Profile {username}</Container>;
}

export default Profile;

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
`;
