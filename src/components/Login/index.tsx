import { useState, ChangeEvent, FormEvent } from "react";
import { styled } from "styled-components";
import { useStore } from "effector-react";

import { login, $access } from "store/access";

export const Login = () => {
  const store = useStore($access);

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

  console.log("store", store);

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit} noValidate>
          <Label>
            Email:
            <Input
              type="text"
              value={formValue.email}
              name="email"
              onChange={handleChange}
            />
          </Label>
          <Label>
            Password:
            <Input
              type="text"
              value={formValue.password}
              name="password"
              onChange={handleChange}
            />
          </Label>

          <Submit>Submit</Submit>
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
  padding: 20px;
  color: #000;
  background: #fff;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 2px;

  &:active,
  &:focus {
    outline: 2px solid #ffaa00;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Submit = styled.button`
  background: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border-radius: 2px;
  transition: 0.4s;

  &:hover {
    background: #422b00;
  }
`;
