import { configureStore } from '@reduxjs/toolkit'

// импорт по умолчанию, импортируем с нужным именем
import sortReducer from './sortSlice'
import optionsReducer from './optionsSlice'

// создали стор
const aviaStore = configureStore({
  reducer: {
    sortReducer,
    optionsReducer,
  },
})

export default aviaStore
