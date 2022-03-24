import React, {useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export const ProfilePage = () => {
  const { state: state } = useLocation();
  const [ member, setMember ] = useState(null);

  const initializeCardData = (data) => {
    let m = {
      name: data.card.details.member_name ? data.card.details.member_name.value : "n/a",
      groupNumber: data.card.details.group_number ? data.card.details.group_number.value : "n/a",
      id: data.card.details.member_number ? data.card.details.member_number.value : "n/a",
      payer: data.card.details.payer_name ? data.card.details.payer_name.value : "n/a",
      plan: data.card.details.plan_name ? data.card.details.plan_name.value : "n/a",
      rxBin: data.card.details.rx_bin ? data.card.details.rx_bin.value : "n/a",
      rxGroup: data.card.details.rx_group ? data.card.details.rx_group.value : "n/a",
      rxPcn: data.card.details.rx_pcn ? data.card.details.rx_pcn.value : "n/a",
    };
    setMember(m)
  }
  
  useEffect(() => {
    fetch(`http://localhost:3001/cards/${state.cardId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      initializeCardData(data);
    })
    .catch(err => console.error(err))
  },[])

  return (  
    <ProfilePageStyled>
      {member
      ? <div>
          {console.log(member)}
          <h1>Welcome {member.name}</h1>
          <div>
            <p>Plan Holder: {member.groupNumber}</p>
            <p>Plan Holder: {member.id}</p>
            <p>Payer Name: {member.payer}</p>
            <p>Plan Name: {member.plan}</p>
            <p>Plan Number: {member.rxBin}</p>
            <p>Plan Number: {member.rxGroup}</p>
            <p>Plan Number: {member.rxPcn}</p>
          </div>
        </div>
      : <div>card not loaded.</div>
      }
    </ProfilePageStyled>
  );
};

const ProfilePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    margin: 1rem auto;
  }
`;