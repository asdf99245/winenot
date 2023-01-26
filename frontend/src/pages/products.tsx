import styled from 'styled-components';
import Product from '@/components/Product';

function products() {
  return (
    <Container>
      <Product src='/icons/wine-mock.png' name='디아블로 레드' price={19900} />
      <Product src='/icons/wine-mock.png' name='디아블로 레드' price={19900} />
      <Product src='/icons/wine-mock.png' name='디아블로 레드' price={19900} />
      <Product src='/icons/wine-mock.png' name='디아블로 레드' price={19900} />
      <Product src='/icons/wine-mock.png' name='디아블로 레드' price={19900} />
      <Product src='/icons/wine-mock.png' name='디아블로 레드' price={19900} />
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
