import './TransferOptions.scss'
import { useDispatch, useSelector } from 'react-redux'

import { clearOptions, setAllOptions, toggleOption } from '../../store/optionsSlice'

export default function TransferOptions() {
  const { all, noTransfer, oneTransfer, twoTransfers, threeTransfers } = useSelector((state) => state.optionsReducer)
  const dispatch = useDispatch()

  const onAllClick = () => {
    if (all) {
      dispatch(clearOptions())
    } else {
      dispatch(setAllOptions())
    }
  }

  const onCheck = (option) => {
    dispatch(toggleOption(option))
  }

  return (
    <div className="transfer-options">
      <h2 className="transfer-options__header">Количество пересадок</h2>
      <form className="transfer-options__form">
        <label htmlFor="all" className="transfer-options__label">
          <input
            type="checkbox"
            name="option"
            id="all"
            className="transfer-options__input"
            checked={all}
            onChange={() => onAllClick()}
          />
          <span className="transfer-options__checkbox" />
          Все
        </label>
        <label htmlFor="noTransfer" className="transfer-options__label">
          <input
            type="checkbox"
            name="option"
            id="noTransfer"
            className="transfer-options__input"
            checked={noTransfer}
            onChange={() => onCheck('noTransfer')}
          />
          <span className="transfer-options__checkbox" />
          Без пересадок
        </label>
        <label htmlFor="oneTransfer" className="transfer-options__label">
          <input
            type="checkbox"
            name="option"
            id="oneTransfer"
            className="transfer-options__input"
            checked={oneTransfer}
            onChange={() => onCheck('oneTransfer')}
          />
          <span className="transfer-options__checkbox" />1 пересадка
        </label>
        <label htmlFor="twoTransfers" className="transfer-options__label">
          <input
            type="checkbox"
            name="option"
            id="twoTransfers"
            className="transfer-options__input"
            checked={twoTransfers}
            onChange={() => onCheck('twoTransfers')}
          />
          <span className="transfer-options__checkbox" />2 пересадки
        </label>
        <label htmlFor="threeTransfers" className="transfer-options__label">
          <input
            type="checkbox"
            name="option"
            id="threeTransfers"
            className="transfer-options__input"
            checked={threeTransfers}
            onChange={() => onCheck('threeTransfers')}
          />
          <span className="transfer-options__checkbox" />3 пересадки
        </label>
      </form>
    </div>
  )
}
