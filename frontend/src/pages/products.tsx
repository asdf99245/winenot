import styled from 'styled-components';
import Product from '@/components/Product';

function products() {
  return (
    <Container>
      <Product src='/icons/wine-mock.png' />
      <Product src='/icons/wine-mock.png' />
      <Product src='/icons/wine-mock.png' />
      <Product src='/icons/wine-mock.png' />
      <Product src='/icons/wine-mock.png' />
      <Product src='/icons/wine-mock.png' />
    </Container>
  );
}

export default products;

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0px 20px;
`;
