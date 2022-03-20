import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavItem } from '..';

export const NavBar = () => {
  const handleOnClick = () => {
    fetch(`http://localhost:3001/logout`, {
      credentials: 'include',
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return ( 
    <NavBarStyled>
      <div className="header">
        <Link to={"/"}>
          <h1>Card Scan AI</h1>
        </Link>
      </div>
      
      <div className="links">
        <NavItem href={"/signup"} text={"register"} />
        <NavItem href={"/login"} text={"login"} />
        <button
          onClick={handleOnClick}
          > Logout
        </button>
      </div>
    </NavBarStyled>
   );
};

const NavBarStyled = styled.div`
  grid-column: 4 / span 8;
  grid-row: 1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  & .links {
    margin-left: auto;
    padding-right: 1rem;
    display: flex;
  }
`;