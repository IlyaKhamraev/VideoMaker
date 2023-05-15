import { styled } from "styled-components";

import { Films } from "components/Films";

export const Content = () => (
  <Wrapper>
    <Container>
      <div>
        <Films />
      </div>
    </Container>
  </Wrapper>
);

export const Wrapper = styled.div`
  display: flex;
  width: 764px;
  padding-top: 6vw;
  padding-bottom: 6vw;
  align-items: center;
  flex: 0 0 auto;
`;

export const Container = styled.div`
  position: relative;
  overflow: visible;
  padding-top: 16px;
  flex: 1;
`;
