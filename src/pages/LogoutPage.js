import styled from 'styled-components';

export const LogoutPage = () => {

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
    <LogoutPageStyled>
      <h1>Logout</h1>
      <button
        onClick={handleOnClick}
        > Logout
      </button>
    </LogoutPageStyled>
  )
};

const LogoutPageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 180px;
  grid-template-rows: 5rem auto;
  grid-gap: 0 1rem;
`;