import React from "react";
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
  background-color: ${props => props.theme.colors.light3};
  display: grid;
  grid-template-columns: 0 repeat(12, minmax(auto, 1fr)) 0;
  grid-template-rows: 4.8rem auto;
  gap: 0 2rem;
  min-width: 320px;
  
  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 0 repeat(6, 1fr) 0 ;
    grid-gap: 0 1rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
  }
`;