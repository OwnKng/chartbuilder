import styled from "styled-components"

export const ButtonOptions = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem;
  text-transform: capitalize;
  background: var(--color-input);
  color: var(--color-paragraph);
  border: none;
  margin: 2px 1px;
  font-size: 1.1rem;

  :hover {
    background: var(--color-selected);
  }

  :focus {
    outline: none;
  }
`
