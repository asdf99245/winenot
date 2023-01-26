import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ProductInfo from '@/components/ProductInfo';

function Product() {
  const router = useRouter();
  const { product } = router.query;

  return (
    <Container>
      <ProductSection>
        <Image src='/icons/wine-mock.png' alt='와인 이미지' width={280} height={500} />
        <ProductInfo name='디아블로 레드' price={19900} />
      </ProductSection>
      <Description>
        레드 와인 하면 카베르네 소비뇽이 떠오를 정도로 높은 인지도를 자랑하는 품종입니다. 프랑스 보르도가 원산지로
        이탈리아 토스카나, 아르헨티나 산후안, 미국 캘리포니아 역시 훌륭한 카베르네 소비뇽 재배지로 인정 받습니다. 묵직한
        바디감과 높은 타닌, 적당한 산도의 카베르네 소비뇽은 그 인기가 말해 주듯 뛰어난 보편성을 지녔습니다. 덕분에 자신
        혹은 함께 마시는 사람의 취향을 모를 때 가장 안전하고 현명한 선택지가 되어 줍니다. 진한 풍미와 낮은 당도를 지녀
        스테이크 같은 육류와 기름진 피자 등과 무척 잘 어울립니다.
      </Description>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  ${({ theme }) => theme.common.flexRow};
  align-items: flex-start;
  padding: 0px 50px;
  margin-top: 40px;
  width: 1200px;
`;

const ProductSection = styled.section`
  ${({ theme }) => theme.common.flexCenterColumn};
  gap: 20px;
`;

const Description = styled.section`
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 20px;
  line-height: 28px;
`;
