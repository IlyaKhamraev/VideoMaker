import { useState, ChangeEvent, FormEvent } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { createEffect, createStore } from "effector";
import { useStore, useEvent } from "effector-react";
import axios from "axios";

function getCookie(name: string) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const fetchLogin = createEffect(
  (loginData: { email: string; password: string }) =>
    axios
      .post("/login", loginData, {
        withCredentials: true,
        baseURL: "http://localhost:8000",
      })
      //@ts-ignore
      .then((req) => req.json())
);

// fetch("http://localhost:8000/login", {
//       method: "POST",
//       headers: {
//         Connection: "keep-alive",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(loginData),
//     }
const $user = createStore(null).on(
  fetchLogin.doneData,
  (state, result) => result
);

// const url: string = "http://0.0.0.0:8000/login";

export const Login = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const user = useStore($user);
  // const pending = useStore(fetchLogin.pending);
  const fetchEvent = useEvent(fetchLogin);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValue.email !== "" && formValue.password !== "") {
      console.log("submit", "formValue", formValue);
      fetchEvent(formValue);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const getuser = () =>
    axios
      .get("http://localhost:8000/users", { withCredentials: true })
      .catch((err) => console.log(err));

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

        <button onClick={getuser}>get users</button>
        <Note>
          Not a member yet? <Link to="/register">Sign up here</Link>
        </Note>
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
