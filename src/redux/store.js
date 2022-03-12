import { configureStore } from '@reduxjs/toolkit'
import songSlide from './songSlide'
import themeSlide from './themeSlide'

export const store = configureStore({
  reducer: {
      theme: themeSlide,
      music: songSlide,
  },
})