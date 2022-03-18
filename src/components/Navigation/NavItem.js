import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = ({ href, text }) => {
  return ( 
    <NavItemStyled>
      <Link to={href}>{text}</Link>
    </NavItemStyled>
   );
};

const NavItemStyled = styled.div`
  &:not(:last-of-type) {
    margin-right: 3rem;
  }
  & a {
    color: ${props => props.theme.colors.dark2};
      &:hover {
      color: ${props => props.theme.colors.secondary2};
    }
  }
`;