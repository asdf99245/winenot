import styled from 'styled-components';
import { getKRLocaleNumberString } from '@/utils/number';

interface ProductInfoProps {
  name: string;
  price: number;
}

function ProductInfo({ name, price }: ProductInfoProps) {
  return (
    <Container>
      <h3>{name}</h3>
      <span>{getKRLocaleNumberString(price)}원</span>
    </Container>
  );
}

export default ProductInfo;

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  gap: 10px;
`;
