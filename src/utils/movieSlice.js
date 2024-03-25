import { createSlice } from "@reduxjs/toolkit";

const moiveSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpComingMovies: null,
    trailerVideos: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.nowUpComingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideos,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moiveSlice.actions;
export default moiveSlice.reducer;
