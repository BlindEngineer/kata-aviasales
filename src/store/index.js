import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import sortReducer from './sortSlice'
import optionsReducer from './optionsSlice'
import ticketReducer from './ticketSlice'

const aviaStore = configureStore({
  reducer: {
    sortReducer,
    optionsReducer,
    ticketReducer,
  },
  middleware: [thunk],
  devTools: false,
})
// devTools - false для правильного отображения на устройствах без девтулзов
export default aviaStore
