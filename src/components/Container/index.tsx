import React from "react";
import { styled } from "styled-components";

import { Navbar } from "components/Navbar";
import { Content } from "components/Content";

export const Container = () => (
  <ContainerWrapper>
    <Navbar />
    <Content />
  </ContainerWrapper>
);

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  height: 100%;
  display: flex;
`;
