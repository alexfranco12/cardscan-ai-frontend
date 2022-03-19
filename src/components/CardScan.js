import { useState } from "react";
import styled from "styled-components";
// import { CardScanView } from "@cardscan.ai/insurance-cardscan-react";

export const CardScan = () => {
  const [token, setToken] = useState("");
  
  const onSuccess = (card) => {
    console.log("success!", card);
  };
  
  const loadScanView = () => {  
  
    fetch("https://{{YOUR_SERVER_BASE_URL}}/cardscan-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.session);
      })
      .catch((err) => console.log(err));
  };
    
  return (
    <CardScanStyled>
      {/* { (token.trim() == "") 
      ? <button onClick={loadScanView}>Start Scanning</button>
      : <CardScanView
          live={false}
          sessionToken={token}
          onSuccess={onSuccess}
        />
      } */}
    </CardScanStyled>
  );

};

const CardScanStyled = styled.div`
`;