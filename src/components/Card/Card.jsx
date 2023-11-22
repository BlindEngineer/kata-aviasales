import logoS7 from '../../assets/img/S7-Logo.png'

import classes from './Card.module.scss'

function Card() {
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
        <span className={cardPrice}>13 400 Р </span>
        <img src={logoS7} className={cardBrandLogo} alt="ЛОГОТИП АВИАКОМПАНИИ" />
      </div>
      <div className={`${cardThere} ${cardSection}`}>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>MOW – HKT</div>
          <div className={cardColumnInfo}>10:45 – 08:00</div>
        </div>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>В пути</div>
          <div className={cardColumnInfo}>21ч 15м</div>
        </div>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>2 пересадки</div>
          <div className={cardColumnInfo}>HKG, JNB</div>
        </div>
      </div>
      <div className={`${cardBack} ${cardSection}`}>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>MOW – HKT</div>
          <div className={cardColumnInfo}>11:20 – 00:50</div>
        </div>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>В пути</div>
          <div className={cardColumnInfo}>13ч 30м</div>
        </div>
        <div className={cardColumn}>
          <div className={cardColumnTitle}>1 пересадка</div>
          <div className={cardColumnInfo}>HKG</div>
        </div>
      </div>
    </div>
  )
}

export default Card
