import classes from './Card.module.scss'

function Card({
  price,
  brandLogo,
  thereOrigin,
  thereDestination,
  thereDuration,
  thereStartTime,
  thereFinishTime,
  thereStops,
  thereTransfersCount,
  backOrigin,
  backDestination,
  backStartTime,
  backFinishTime,
  backDuration,
  backStops,
  backTransfersCount,
}) {
  const {
    card,
    card__column: cardColumn,
    card__top: cardTop,
    card__price: cardPrice,
    'card__brand-logo': cardBrandLogo,
    card__section: cardSection,
    card__there: cardThere,
    card__back: cardBack,
    'card__column-title': cardColumnTitle,
    'card__column-info': cardColumnInfo,
  } = classes
  return (
    <div className={card}>
      <div className={cardTop}>
        <span className={cardPrice}>{price}</span>
        <img src={brandLogo} className={cardBrandLogo} alt="ЛОГОТИП АВИАКОМПАНИИ" />
      </div>
      <div className={`${cardThere} ${cardSection}`}>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>
            {thereOrigin} – {thereDestination}
          </div>
          <div className={cardColumnInfo}>
            {thereStartTime} – {thereFinishTime}
          </div>
        </div>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>В пути</div>
          <div className={cardColumnInfo}>{thereDuration}</div>
        </div>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>{thereTransfersCount}</div>
          <div className={cardColumnInfo}>{thereStops}</div>
        </div>
      </div>
      <div className={`${cardBack} ${cardSection}`}>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>
            {backOrigin} – {backDestination}
          </div>
          <div className={cardColumnInfo}>
            {backStartTime} – {backFinishTime}
          </div>
        </div>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>В пути</div>
          <div className={cardColumnInfo}>{backDuration}</div>
        </div>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>{backTransfersCount}</div>
          <div className={cardColumnInfo}>{backStops}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
