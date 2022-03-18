import styled from 'styled-components';

export const HomePage = () => {
  
  return (
    <HomePageStyled>
      <h1>Home Page</h1>
    </HomePageStyled>
  )
};

const HomePageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 180px;
  grid-template-rows: 5rem auto;
  grid-gap: 0 1rem;
`;