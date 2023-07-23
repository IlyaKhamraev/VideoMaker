import { useState, ChangeEvent, FormEvent } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Register = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("submit");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <Wrapper>
      <Login>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="userName">
            Username:
            <Input
              type="text"
              value={formValue.username}
              name="username"
              onChange={handleChange}
            />
          </Label>
          <Label htmlFor="email">
            Email:
            <Input
              type="text"
              value={formValue.email}
              name="email"
              onChange={handleChange}
            />
          </Label>
          <Label htmlFor="passwrd">
            Password:
            <Input
              type="text"
              value={formValue.password}
              name="password"
              onChange={handleChange}
            />
          </Label>
          <Label htmlFor="reppassword">
            Confirm Password:
            <Input
              type="text"
              value={formValue.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
          </Label>

          <button>Sign up</button>
        </Form>
        <Note>
          Already a memeber? <Link to="/login">Login in here</Link>
        </Note>
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

export const Note = styled.div`
  margin-top: 20px;

  a {
    text-decoration: underline;
  }
`;
