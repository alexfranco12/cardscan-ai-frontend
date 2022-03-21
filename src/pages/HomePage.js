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
      <div className="title">
        <h1>Home Page</h1>
      </div>
      <div className="logged_in">
        <button
          onClick={handleOnClick}
          > Am I Logged In?
        </button>
      </div>
      <div className="card_scan">
        <CardScan />
      </div>
    </HomePageStyled>
  )
};

const HomePageStyled = styled.div`
  position: relative;
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(6, minmax(auto, 1fr));
  grid-template-rows: 4.8rem auto;
  & .title {
    grid-column: 1 / span 3;
    grid-row-start: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    & h1 {
      font-size: large;
    }
  }
  & .logged_in {
    grid-column: 4 / span 3;
    grid-row-start: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .card_scan {
    grid-column: 1 / span 6;
    grid-row-start: 2;
  }
`;