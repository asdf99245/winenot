import Image from 'next/image';
import styled, { css } from 'styled-components';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  size: AvatarSize;
  src?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface StyledContainerProps {
  size: AvatarSize;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

function Avatar({ size = 'md', src = '/icons/user.svg', onClick }: AvatarProps) {
  return (
    <Container>
      <ImageContainer size={size} onClick={onClick}>
        {src && <Image src={src} alt='프로필 이미지' sizes='50vw' fill priority={size === 'lg'} />}
      </ImageContainer>
    </Container>
  );
}

export default Avatar;

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-size: ${({ theme }) => theme.fontSize.lg};
  width: max-content;
`;

const ImageContainer = styled.div<StyledContainerProps>`
  ${({ theme }) => theme.common.flexCenter};
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;

  position: relative;

  ${(props) =>
    props.size === 'sm' &&
    css`
      width: 30px;
      height: 30px;
    `}

  ${(props) =>
    props.size === 'lg' &&
    css`
      width: 150px;
      height: 150px;
    `}

    ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;
