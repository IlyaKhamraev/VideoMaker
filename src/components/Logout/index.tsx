import React, { FormEvent } from "react";
import { styled } from "styled-components";

import { logout } from "store/access";

export const Logout = () => {
  const getLogout = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    logout();
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={getLogout} noValidate>
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
