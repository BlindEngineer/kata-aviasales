export default function sortTickets(tickets, tab) {
  if (tab === 'cheapest') {
    return tickets.toSorted((prev, next) => {
      return prev.price - next.price
    })
  }
  return tickets.toSorted((prev, next) => {
    const prevTotalDuration = prev.segments[0].duration + prev.segments[1].duration
    const nextTotalDuration = next.segments[0].duration + next.segments[1].duration
    return prevTotalDuration - nextTotalDuration
  })
}
