import React from "react";
import styled from 'styled-components';
import { CardScan } from '../components';

export const HomePage = () => {

  const handleOnClick = () => {
    fetch(`http://localhost:3001/logged_in`, {
      credentials: 'include',
      method: 'GET',
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
    <HomePageStyled>
      <h1>Home Page</h1>
      <button
        onClick={handleOnClick}
        > Am I Logged In?
      </button>
      <div>
        <CardScan />
      </div>
    </HomePageStyled>
  )
};

const HomePageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 180px;
  grid-template-rows: 5rem auto;
  grid-gap: 0 1rem;
`;