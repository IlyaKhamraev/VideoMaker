import { useState, ChangeEvent, FormEvent } from "react";
import { styled } from "styled-components";

import { login } from "store/access";

export const Login = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValue.email !== "" && formValue.password !== "") {
      login(formValue);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">
            Email:
            <Input
              type="text"
              value={formValue.email}
              name="email"
              onChange={handleChange}
            />
          </Label>
          <Label htmlFor="password">
            Password:
            <Input
              type="text"
              value={formValue.password}
              name="password"
              onChange={handleChange}
            />
          </Label>

          <button>Log in</button>
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
