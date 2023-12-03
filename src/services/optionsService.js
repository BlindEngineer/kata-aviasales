export default function optionsFilterTickets(tickets, options) {
  const resultArray = [...tickets]
  const filterOptions = []
  if (options.noTransfer) filterOptions.push(0)
  if (options.oneTransfer) filterOptions.push(1)
  if (options.twoTransfers) filterOptions.push(2)
  if (options.threeTransfers) filterOptions.push(3)
  return resultArray.filter((ticket) => {
    const thereCount = ticket.segments[0].stops.length
    const backCount = ticket.segments[1].stops.length
    return filterOptions.includes(thereCount) || filterOptions.includes(backCount)
  })
}
