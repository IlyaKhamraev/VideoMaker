import { FC } from "react";
import { styled } from "styled-components";

import { Navbar } from "components/Navbar";

interface Props {
  children: JSX.Element;
}

export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>
        <AlignBlock>{children}</AlignBlock>
      </Content>
    </>
  );
};

const Content = styled.div`
  display: flex;
  width: 764px;
  padding-top: 6vw;
  padding-bottom: 6vw;
  align-items: center;
  flex: 0 0 auto;
`;

const AlignBlock = styled.div`
  position: relative;
  overflow: visible;
  padding-top: 16px;
  flex: 1;
`;
