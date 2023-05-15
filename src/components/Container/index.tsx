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
  display: flex;
  overflow: visible;
  margin: 0 auto;
  padding-right: 20px;
  justify-content: center;
`;
