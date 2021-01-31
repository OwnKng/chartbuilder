import styled from "styled-components"
import { elevation } from "../utilities"

export const Button = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: none;
  margin: 10px 0px;
  ${elevation[2]};
  background: var(--color-button);
  font-size: 1.2rem;
  transition: background 0.2s ease;

  :focus {
    outline: none;
  }

  :hover {
    background: var(--color-button-hover);
  }
`
