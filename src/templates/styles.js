import styled from "styled-components"

export const StyledMarkdownContainer = styled.div`
  display: flex;
`;

export const StyledMarkdownLeft = styled.div`
  width: 15%;
`

export const StyledMarkdownCenter = styled.div`
  width: 70%;
`

export const StyledMarkdownRight = styled.div`
  width: 15%;
  & > div {
    position: sticky;
    top: 60px;
  }
`