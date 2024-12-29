import React from "react";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";

const HeaderBar: React.FC<{}> = ({}) => {
  return (
    <Container>
      <Title> Keather </Title>
      <RightSide>
        <LanguageSelector />
      </RightSide>
    </Container>
  );
};

export default HeaderBar;

const Container = styled.div`
  height: 50px;
  padding: 0px 20px;
  background-color: #a5dbec;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;

const RightSide = styled.div``;
