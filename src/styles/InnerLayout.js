import styled from "styled-components";

export const InnerLayout = ({ children }) => {
  return ( 
    <InnerLayoutStyled>
      {children}
    </InnerLayoutStyled>
   );
};

const InnerLayoutStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 2;
`;