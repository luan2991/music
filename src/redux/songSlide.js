import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  song: localStorage.hasOwnProperty('song')
    ? JSON.parse(localStorage.getItem('song'))
    : '',
  playlist: localStorage.hasOwnProperty('playlist')
    ? JSON.parse(localStorage.getItem('playlist'))
    : '',
  isPlay: false,
  songIndex: localStorage.hasOwnProperty('songIdx')
    ? JSON.parse(localStorage.getItem('songIdx'))
    : 0,
};

const songSlide = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setSong(state, action) {
      state.song = action.payload;
    },
    setPlay(state, action) {
      state.isPlay = action.payload;
    },
    setPlaylist(state, action) {
      state.playlist = action.payload;
    },
    setSongIdx(state, action) {
      state.songIndex = action.payload;
    },
  },
});

export const { setSong, setPlay, setPlaylist, setSongIdx } = songSlide.actions;

export default songSlide.reducer;
