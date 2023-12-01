import { addSearchId, addTickets } from '../store/ticketSlice'

const url = 'https://aviasales-test-api.kata.academy/'
export const fetchTickets = (id) => {
  return function (dispatch) {
    fetch(`${url}tickets?searchId=${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(addTickets(json)))
  }
}

export const fetchId = () => (dispatch) => {
  fetch(`${url}search`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}. Received status ${response.status}`)
      }
      return response.json()
    })
    .then((json) => {
      const { searchId } = json
      dispatch(addSearchId(searchId))
      dispatch(fetchTickets(searchId))
    })
}
