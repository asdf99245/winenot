import Image from 'next/image';
import styled, { css } from 'styled-components';

type LoginType = 'naver' | 'kakao' | 'google';

interface LoginButtonProps {
  src: string;
  type: LoginType;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface StyledButtonProps {
  social: LoginType;
}

function LoginButton({ src, type, text, onClick }: LoginButtonProps) {
  return (
    <Button social={type} onClick={onClick}>
      <Image src={src} alt='와인 이미지' width={30} height={30} />
      <span>{text}</span>
    </Button>
  );
}

export default LoginButton;

const Button = styled.button<StyledButtonProps>`
  ${({ theme }) => theme.common.flexCenter};
  color: ${({ theme }) => theme.colors.black1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  gap: 10px;
  margin-top: 20px;
  width: 400px;

  ${(props) =>
    props.social === 'naver' &&
    css`
      background-color: #1ec800;
    `}

  ${(props) =>
    props.social === 'kakao' &&
    css`
      background-color: #f7e600;
    `}

  ${(props) =>
    props.social === 'google' &&
    css`
      background-color: ${({ theme }) => theme.colors.gray3};
    `}
`;
