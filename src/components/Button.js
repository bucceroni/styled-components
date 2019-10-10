import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export default Button;
