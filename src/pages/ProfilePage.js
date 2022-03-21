import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export const ProfilePage = props => {
  const { state: member } = useLocation();

  return (  
    <ProfilePageStyled>
      {location != null 
      ? <div>
          <h1>Welcome {member.member}</h1>
          <p>Plan Holder: {member.client}</p>
          <p>Payer Name: {member.payer}</p>
          <p>Plan Name: {member.plan}</p>
          <p>Plan Number: {member.planId}</p>
        </div>
      : <div>member not loaded.</div>
      }
    </ProfilePageStyled>
  );
};

const ProfilePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;