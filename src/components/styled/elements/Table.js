import styled from "styled-components"

export const Table = styled.table`
  color: var(--color-paragraph);
  text-align: left;
  font-size: 1rem;

  tbody {
    tr:nth-child(odd) {
      background: var(--color-selected);
    }
  }
`
