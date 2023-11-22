import './TransferOptions.scss'

export default function TransferOptions() {
  return (
    <div className="transfer-options">
      <h2 className="transfer-options__header">Количество пересадок</h2>
      <form className="transfer-options__form">
        <label htmlFor="all" className="transfer-options__label">
          <input type="checkbox" name="option" id="all" className="transfer-options__input" />
          <span className="transfer-options__checkbox" />
          Все
        </label>
        <label htmlFor="noTransfer" className="transfer-options__label">
          <input type="checkbox" name="option" id="noTransfer" className="transfer-options__input" />
          <span className="transfer-options__checkbox" />
          Без пересадок
        </label>
        <label htmlFor="oneTransfer" className="transfer-options__label">
          <input type="checkbox" name="option" id="oneTransfer" className="transfer-options__input" />
          <span className="transfer-options__checkbox" />1 пересадка
        </label>
        <label htmlFor="twoTransfers" className="transfer-options__label">
          <input type="checkbox" name="option" id="twoTransfers" className="transfer-options__input" />
          <span className="transfer-options__checkbox" />2 пересадки
        </label>
        <label htmlFor="threeTransfers" className="transfer-options__label">
          <input type="checkbox" name="option" id="threeTransfers" className="transfer-options__input" />
          <span className="transfer-options__checkbox" />3 пересадки
        </label>
      </form>
    </div>
  )
}
