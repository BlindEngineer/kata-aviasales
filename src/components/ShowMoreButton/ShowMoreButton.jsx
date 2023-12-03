import './ShowMoreButton.scss'

export default function ShowMoreButton({ increaseCount }) {
  return (
    <button type="button" className="show-button" onClick={() => increaseCount()}>
      Показать еще 5 билетов!
    </button>
  )
}
