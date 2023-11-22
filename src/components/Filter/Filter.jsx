import './Filter.scss'

export default function Filter() {
  return (
    <div className="filter">
      <button type="button" className="filter__button filter__button--left filter__button--active">
        Самый дешёвый
      </button>
      <button type="button" className="filter__button filter__button--right">
        Самый быстрый
      </button>
    </div>
  )
}
