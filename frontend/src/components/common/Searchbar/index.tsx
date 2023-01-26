import Image from 'next/image';
import styled, { css } from 'styled-components';

interface SearchbarProps {
  width: number;
  placeholder: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface StyledFormProps {
  width: number;
}

function Searchbar({ width, placeholder, onSubmit }: SearchbarProps) {
  return (
    <Form width={width} onSubmit={onSubmit}>
      <SearchInput placeholder={placeholder} />
      <Submit type='submit'>
        <Image src='icons/search.svg' alt='검색' width={20} height={20} />
      </Submit>
    </Form>
  );
}

export default Searchbar;

const Form = styled.form<StyledFormProps>`
  ${({ theme }) => theme.common.boxShadow};
  ${({ theme }) => theme.common.flexSpaceBetween};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.purple2};
  border: 2px solid ${({ theme }) => theme.colors.purple3};
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
`;

const SearchInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Submit = styled.button`
  ${({ theme }) => theme.common.flexCenter};
  background-color: ${({ theme }) => theme.colors.purple3};
  border: none;
  width: 60px;
  height: 50px;
  display: block;
  padding: 0;
  position: relative;
`;
