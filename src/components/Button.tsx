import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  transition: all 300ms;
  :disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

export default function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
