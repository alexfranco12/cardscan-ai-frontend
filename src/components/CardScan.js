import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import { CardScanView } from "@cardscan.ai/insurance-cardscan-react";

export const CardScan = () => {
  const [token, setToken] = useState("");
  const content = { 
    startingTitle: "Get Started", 
    startingSubtitle: "Hold card inside rectangle" 
  }
  let navigate = useNavigate();
  
  const onSuccess = (card) => {
    console.log("success!", card);
    const { clientName, memberName, memberNumber, payerName, planName, planId } = card.details
    navigate('/profile', { state: {
      client: clientName.value || null,
      member: memberName.value || null,
      memberId: memberNumber.value || null,
      payer: payerName.value || null,
      plan: planName.value || null,
      planId: planId.value || null
    }});
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
      : <div className="card_scan_view">
          <CardScanView
            live={false}
            sessionToken={token}
            onSuccess={onSuccess}
            // onCancel={onCancel}
            // onError={onError}
            // content={content}
            // closeButton={closeButton}
            // successIndicator={successIndicator}
            // errorIndicator={errorIndicator}
            // indicatorOptions={indicatorOptions}
            // enableCameraPermissionModal={enableModal}
          />
        </div> 
      }
    </CardScanStyled>
  );

};

const CardScanStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(auto, 1fr));
  grid-template-rows: auto; 
  & button {
    grid-column: 1 / span 6;
    grid-row-start: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .card_scan_view {
    grid-column: 1 / span 6;
    grid-row-start: 1;
    /* & .root {
      width: 100%;
      height: 75vh;
      & .close-btn {
        z-index: 99;
      }
    } */
  }
`;