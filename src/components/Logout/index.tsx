import { styled } from "styled-components";

import axios from "axios";

export const Logout = () => {
  const getLogout = () =>
    axios
      .get("http://localhost:8000/logout", { withCredentials: true })
      .catch((err) => console.log(err));

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={getLogout}>
          <button>Logout</button>
        </Form>
      </Container>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  border: 1px solid #fff;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Note = styled.div`
  margin-top: 20px;

  a {
    text-decoration: underline;
  }
`;
