import './CardList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'

import Card from '../Card/Card'
import { fetchId } from '../../services/apiService'

export default function CardList() {
  const tickets = useSelector((state) => state.ticketReducer.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchId())
  }, [dispatch])

  const formatPrice = (price) => `${price.toLocaleString('ru')} ₽`
  const brandLogoUrl = 'http://pics.avs.io/110/36/'

  const getDuration = (duration) => {
    const hours = String(Math.floor(duration / 60))
    const minutes = String(duration % 60)
    return `${hours}ч ${minutes}м`
  }

  const addZeroToTime = (num) => {
    if (num < 1) {
      return '00'
    }
    if (num < 10) {
      return `0${num}`
    }
    return num
  }

  const findFinishDate = (date, duration) => {
    const startDate = new Date(date).getTime()
    const msDuration = duration * 60000
    return startDate + msDuration
  }

  const findTimeFromDate = (date) => {
    const newDate = new Date(date)
    const hours = newDate.getHours()
    const minutes = newDate.getMinutes()
    return `${addZeroToTime(hours)}:${addZeroToTime(minutes)}`
  }

  const ticketsSliceToDisplay = tickets.slice(0, 5)

  const getTransferText = (num) => {
    switch (num) {
      case 0:
        return 'БЕЗ ПЕРЕСАДОК'
      case 1:
        return '1 ПЕРЕСАДКА'
      case 2:
        return '2 ПЕРЕСАДКИ'
      case 3:
        return '3 ПЕРЕСАДКИ'
      default:
        return true
    }
  }

  const ticketsDisplay = ticketsSliceToDisplay.map((ticket) => {
    const { price, carrier, segments } = ticket
    const {
      origin: thereOrigin,
      destination: thereDestination,
      date: thereDate,
      duration: thereDuration,
      stops: thereStops,
    } = segments[0]
    const {
      origin: backOrigin,
      destination: backDestination,
      date: backDate,
      duration: backDuration,
      stops: backStops,
    } = segments[1]

    return (
      <Card
        key={nanoid()}
        price={formatPrice(price)}
        brandLogo={`${brandLogoUrl}${carrier}.png`}
        thereOrigin={thereOrigin}
        thereDestination={thereDestination}
        thereStartTime={findTimeFromDate(thereDate)}
        thereFinishTime={findTimeFromDate(findFinishDate(thereDate, thereDuration))}
        thereDuration={getDuration(thereDuration)}
        thereStops={thereStops.join(', ')}
        thereTransfersCount={getTransferText(thereStops.length)}
        backOrigin={backOrigin}
        backDestination={backDestination}
        backStartTime={findTimeFromDate(backDate)}
        backFinishTime={findTimeFromDate(findFinishDate(backDate, backDuration))}
        backDuration={getDuration(backDuration)}
        backStops={backStops.join(', ')}
        backTransfersCount={getTransferText(backStops.length)}
      />
    )
  })
  return <div className="cardWrapper">{ticketsDisplay}</div>
}
