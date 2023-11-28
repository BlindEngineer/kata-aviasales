import { createSlice } from '@reduxjs/toolkit'

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    all: false,
    noTransfer: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  reducers: {
    toggleOption(state, action) {
      let newState = { ...state, [action.payload]: !state[action.payload] }
      const { all, noTransfer, oneTransfer, twoTransfers, threeTransfers } = newState
      if (noTransfer && oneTransfer && twoTransfers && threeTransfers && !all) {
        newState = { ...newState, all: true }
      } else if (!(noTransfer && oneTransfer && twoTransfers && threeTransfers) && all) {
        newState = { ...newState, all: false }
      }
      return newState
    },
    clearOptions(state) {
      const newState = { ...state }
      Object.keys(newState).forEach((optionKey) => {
        newState[optionKey] = false
      })
      return newState
    },
    setAllOptions(state) {
      const newState = { ...state }
      Object.keys(newState).forEach((optionKey) => {
        newState[optionKey] = true
      })
      return newState
    },
  },
})

export const { toggleOption, clearOptions, setAllOptions } = optionsSlice.actions
export default optionsSlice.reducer
