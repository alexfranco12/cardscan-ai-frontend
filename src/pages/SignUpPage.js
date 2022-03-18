import { useState } from "react";
import styled from 'styled-components'

const initialFormState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
}

export const SignUpPage = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    console.log(formState)

    fetch(`http://localhost:3001/users`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: formState}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const updateFormControl = (e) => {
    const { id, value } = e.target;
    const updatedFormState = {...formState};
    updatedFormState[id] = value;
    setFormState(updatedFormState);
  };

  return ( 
    <SignUpPageStyled>
      <h1>Sign Up</h1>
      { message && 
        <div>{message}</div>
      }
      <form 
        className="SignUp-form"
        onSubmit={submitForm}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input 
            className="name" 
            id="name" 
            type="text"
            onChange={updateFormControl}
            value={formState.name}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input 
            className="email" 
            id="email" 
            type="email"
            onChange={updateFormControl}
            value={formState.email}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input 
            className="password" 
            id="password" 
            type="password"
            onChange={updateFormControl}
            value={formState.password}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input 
            className="password_confirmation" 
            id="password_confirmation" 
            type="password"
            onChange={updateFormControl}
            value={formState.password_confirmation}
          />
        </div>

        <div className="buttons">
          <button 
            className="submit-button"
            disabled={isSubmitting}
            > Sign Up
          </button>
        </div>
        
      </form>
    </SignUpPageStyled>
   );
};

const SignUpPageStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    margin-bottom: 2rem;
  }
  & .input-field {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-bottom: 15px;
    & label {
      margin-bottom: 5px;
    }
  }
`