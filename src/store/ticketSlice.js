import { createSlice } from '@reduxjs/toolkit'

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchId: null,
    tickets: [],
    error: false,
    loading: false,
  },
  reducers: {
    addTickets(state, action) {
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        loading: false,
        error: false,
      }
    },
    addSearchId(state, action) {
      return { ...state, searchId: action.payload }
    },
    startLoadingTickets(state) {
      return { ...state, loading: true, error: false }
    },
    getError(state, action) {
      return { ...state, loading: false, error: action.payload }
    },
    stopLoadingTickets(state) {
      return { ...state, loading: false, error: false }
    },
  },
})

export const { addTickets, addSearchId, startLoadingTickets, getError, stopLoadingTickets } = ticketSlice.actions
export default ticketSlice.reducer
