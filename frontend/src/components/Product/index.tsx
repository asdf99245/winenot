import Image from 'next/image';
import styled from 'styled-components';

interface ProductProps {
  src: string;
}

function Product({ src }: ProductProps) {
  return (
    <Container>
      <Image src={src} alt='와인 이미지' width={160} height={250} />
      <h3>디아볼로 레드</h3>
      <span>19,900원</span>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 20px;
  gap: 10px;
`;
