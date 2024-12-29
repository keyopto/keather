import React from "react";
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import { Outlet } from "react-router-dom";

const Layout: React.FC<{}> = ({}) => {
  return (
    <Container>
      <HeaderBar />
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div``;
