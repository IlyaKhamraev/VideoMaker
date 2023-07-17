import { useState, ChangeEvent, FormEvent } from "react";
import { styled } from "styled-components";

export const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("submit");
  };

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Wrapper>
      <Login>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="login">
            Login
            <Input
              type="text"
              value={login}
              name="login"
              onChange={handleChangeLogin}
            />
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              type="text"
              value={password}
              name="password"
              onChange={handleChangePassword}
            />
          </Label>

          <button>login</button>
        </Form>
      </Login>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Login = styled.div`
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
