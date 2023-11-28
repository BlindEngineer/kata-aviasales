import { createSlice } from '@reduxjs/toolkit'

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    activeTab: 'cheapest',
  },
  reducers: {
    toggleTab(state, action) {
      return { ...state, activeTab: action.payload }
    },
  },
})

export const { toggleTab } = sortSlice.actions
export default sortSlice.reducer
