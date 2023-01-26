import Image from 'next/image';
import styled from 'styled-components';

interface IconButtonProps {
  src: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

function IconButton({ src, onClick }: IconButtonProps) {
  return (
    <Container onClick={onClick}>
      <Image src={src} alt='버튼' sizes='50vw' fill />
    </Container>
  );
}

export default IconButton;

const Container = styled.div`
  width: 30px;
  height: 30px;

  position: relative;

  cursor: pointer;
`;
