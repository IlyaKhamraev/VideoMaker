import { FC } from "react";
import { styled } from "styled-components";

interface Props {
  children: JSX.Element;
}

export const Container: FC<Props> = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

const ContainerWrapper = styled.div`
  display: flex;
  overflow: visible;
  margin: 0 auto;
  padding-right: 20px;
  justify-content: center;
`;
