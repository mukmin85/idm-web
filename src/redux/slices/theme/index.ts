import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkmode: false
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkMode(state) {
      state.darkmode = !state.darkmode
    }
  }
})

export const themeData = (state) => state.theme

export const { setDarkMode } = themeSlice.actions

export default themeSlice.reducer
