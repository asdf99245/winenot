import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import ProductInfo from '../ProductInfo';

interface ProductProps {
  src: string;
  name: string;
  price: number;
}

function Product({ src, name, price }: ProductProps) {
  return (
    <Container>
      <Link href={`/detail/${name}`}>
        <Item>
          <Image src={src} alt='와인 이미지' width={160} height={250} />
          <ProductInfo name={name} price={price} />
        </Item>
      </Link>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 20px;
`;

const Item = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  gap: 10px;
`;
