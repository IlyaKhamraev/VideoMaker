import { createEffect, createStore } from "effector";
import axios from "axios";

import { ModelsProfile, Auth } from "types";
import { history } from "helpers/history";

type State = {
  isAuthenticated: boolean;
  profile: ModelsProfile | null;
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  isAuthenticated: false,
  profile: null,
  loading: false,
  error: null,
};

const baseURL = `http://localhost:8000`;

const options = {
  withCredentials: true,
  baseURL,
};

export const login = createEffect(async (authData: Auth) => {
  const response = await axios.post("/login", authData, options);

  return response;
});

login.done.watch(() => {
  if (history && history.navigate) {
    history?.navigate("/dashboard");
  }
});

export const logout = createEffect(async () => {
  const response = await axios.get("/logout", options);

  return response;
});

logout.done.watch(() => {
  if (history && history.navigate) {
    history?.navigate("/");
  }
});

export const getProfile = createEffect(async () => {
  const response = await axios.get("/profile", options);

  return response;
});

export const $access = createStore<State>(initialState)
  .on(
    login.doneData,
    (state, payload): State => ({
      ...state,
      isAuthenticated: true,
      profile: payload.data,
    })
  )
  .on(
    getProfile.doneData,
    (state, payload): State => ({
      ...state,
      isAuthenticated: true,
      profile: payload.data,
    })
  )
  .on(logout.doneData, (state) => ({
    ...state,
    isAuthenticated: false,
    profile: null,
  }));
