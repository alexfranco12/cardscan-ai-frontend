import { useEffect, useState } from "react";
import CardScanView from "react-cardscan-ai";

export const Onboarding = () => {
  const [token, setToken] = useState("");
  
  const onSuccess = (card) => {
    console.log("success!");
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
    <div>
      { (token.trim() == "") 
      ? <button onClick={loadScanView}>Start Scanning</button>
      : <CardScanView
          live={false}
          sessionToken={token}
          onSuccess={onSuccess}
        />
      }
    </div>
  );
};