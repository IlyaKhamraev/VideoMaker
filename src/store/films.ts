import { createEffect, createStore } from "effector";
import axios from "axios";

import { Films } from "types";

type State = {
  films: Films[] | null;
  loading: boolean;
};

const initialState: State = {
  films: null,
  loading: false,
};

const baseURL = `http://localhost:8000`;

const options = {
  withCredentials: true,
  baseURL,
};

export const getFilms = createEffect(async () => {
  const response = await axios.get("/films", options);

  return response;
});

export const $films = createStore<State>(initialState).on(
  getFilms.doneData,
  (state, payload): State => ({
    ...state,
    films: payload.data,
    loading: false,
  })
);
