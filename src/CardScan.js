import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { CardScanView } from "@cardscan.ai/insurance-cardscan-react";

export const CardScan = () => {
  const [token, setToken] = useState("");
  
  const onSuccess = (card) => {
    console.log("success!", card);
  };
  
  const loadScanView = () => {  

    fetch(`http://localhost:3001/cardscan_session`, {
      credentials: 'include',
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setToken(data.token.Token);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
    
  return (
    <CardScanStyled>
      { (token.trim() === "")
      ? <button onClick={loadScanView}>Start Scanning</button>
      : <CardScanView
          live={false}
          sessionToken={token}
          onSuccess={onSuccess}
        />
      }
    </CardScanStyled>
  );

};

const CardScanStyled = styled.div`
`;