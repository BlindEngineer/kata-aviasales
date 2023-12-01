import { configureStore } from '@reduxjs/toolkit'
// импорт по умолчанию, импортируем с нужным именем
import thunk from 'redux-thunk'

import sortReducer from './sortSlice'
import optionsReducer from './optionsSlice'
import ticketReducer from './ticketSlice'

// создали стор
const aviaStore = configureStore({
  reducer: {
    sortReducer,
    optionsReducer,
    ticketReducer,
  },
  middleware: [thunk],
  devTools: true,
})

export default aviaStore
