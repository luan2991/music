import { configureStore } from '@reduxjs/toolkit'
import themeSlide from './themeSlide'

export const store = configureStore({
  reducer: {
      theme: themeSlide,
  },
})