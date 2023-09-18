import { createEffect, createStore } from "effector";
import axios from "axios";

import { Film } from "types";

type State = {
  films: Film[] | null;
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

export const createFilm = createEffect(async (data: Film) => {
  const response = await axios.post("/film", data, options);

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
