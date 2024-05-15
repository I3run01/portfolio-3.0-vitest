import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  isDark: boolean
}

const initialState: ThemeState = {
  isDark: localStorage.getItem('theme') == 'dark' ? true : false
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark ? state.isDark = false : state.isDark = true
      localStorage.setItem('theme', state.isDark ? 'dark' : 'light')
    },
  }, 
})

export const { changeTheme} = counterSlice.actions

export default counterSlice.reducer