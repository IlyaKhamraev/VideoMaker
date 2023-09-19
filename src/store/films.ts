import { createEffect, createStore } from "effector";
import axios from "axios";

import { Film, FilmFormType } from "types";

type State = {
  films: Film[];
  isLoading: boolean;
};

const initialState: State = {
  films: [],
  isLoading: false,
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

export const createFilm = createEffect(async (film: FilmFormType) => {
  const response = await axios.post("/film", film, options);

  return response;
});

export const deleteFilm = createEffect(async () => {
  const response = await axios.delete("/film", options);

  return response;
});

export const updateFilm = createEffect(async (film: FilmFormType) => {
  const response = await axios.patch("/film", film, options);

  return response;
});

export const $films = createStore<State>(initialState)
  .on(
    getFilms.doneData,
    (state, payload): State => ({
      ...state,
      films: payload.data,
      isLoading: false,
    })
  )
  .on(getFilms.pending, (state, isLoading): State => ({ ...state, isLoading }))
  .on(
    createFilm.doneData,
    (state, paylaod): State => ({
      ...state,
      films: [...state.films, paylaod.data],
    })
  )
  .on(
    createFilm.pending,
    (state, isLoading): State => ({ ...state, isLoading })
  )
  .on(
    deleteFilm.doneData,
    (state, paylaod): State => ({
      ...state,
      films: state.films?.filter((film) => film._id !== paylaod.data.id),
    })
  )
  .on(
    deleteFilm.pending,
    (state, isLoading): State => ({ ...state, isLoading })
  )
  .on(
    updateFilm.doneData,
    (state, paylaod): State => ({
      ...state,
      films: state.films?.map((film) =>
        film._id === paylaod.data.id ? paylaod.data : film
      ),
    })
  )
  .on(
    updateFilm.pending,
    (state, isLoading): State => ({ ...state, isLoading })
  );
