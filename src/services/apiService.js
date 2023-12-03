import { addSearchId, addTickets, startLoadingTickets, getError, stopLoadingTickets } from '../store/ticketSlice'

const url = 'https://aviasales-test-api.kata.academy/'
export const fetchTickets = (id) => (dispatch) => {
  dispatch(startLoadingTickets())
  fetch(`${url}tickets?searchId=${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}. Received status ${response.status}`)
      }
      return response.json()
    })
    .then((json) => {
      const data = json
      dispatch(addTickets(data))
      if (!data.stop) fetchTickets(id)(dispatch)
      if (data.stop) dispatch(stopLoadingTickets())
    })
    .catch((error) => {
      if (error.message < 500) {
        dispatch(getError(error.message))
      } else {
        fetchTickets(id)(dispatch)
      }
    })
}

export const fetchId = async () => {
  const response = await fetch(`${url}search`)
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}. Received status ${response.status}`)
  }
  return response.json()
}

export const getTheWholeBunchOfTickets = () => (dispatch) => {
  fetchId()
    .then((json) => {
      const { searchId } = json
      dispatch(addSearchId(searchId))
      dispatch(fetchTickets(searchId))
    })
    .catch((error) => {
      dispatch(getError(error))
    })
}
