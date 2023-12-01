import { createSlice } from '@reduxjs/toolkit'

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchId: null,
    tickets: [],
    gettingTickets: false,
    error: null,
  },
  reducers: {
    addTickets(state, action) {
      return { ...state, tickets: [...state.tickets, ...action.payload.tickets] }
    },
    addSearchId(state, action) {
      return { ...state, searchId: action.payload }
    },
  },
})

export const { addTickets, addSearchId } = ticketSlice.actions
export default ticketSlice.reducer
