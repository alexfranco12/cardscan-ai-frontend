import styled from "styled-components";
import { NavBar } from "../components";

export const MainLayout = ({ children }) => {
  return ( 
    <MainLayoutStyled>
      <NavBar />
      {children}
    </MainLayoutStyled>
   );
};

const MainLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 0.5rem repeat(12, 1fr) 0.5rem;
  grid-template-rows: 6.125rem auto;
  grid-gap: 0 2rem;
  background-color: ${props => props.theme.colors.light1};
`;