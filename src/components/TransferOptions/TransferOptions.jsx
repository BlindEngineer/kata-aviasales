import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

import { clearOptions, setAllOptions, toggleOption } from '../../store/optionsSlice'

import classes from './TransferOptions.module.scss'

export default function TransferOptions() {
  const {
    'transfer-options': options,
    'transfer-options__header': header,
    'transfer-options__form': form,
    'transfer-options__checkbox': checkbox,
    'transfer-options__label': label,
    'transfer-options__input': input,
  } = classes
  const filters = useSelector((state) => state.optionsReducer)
  const optionsKeys = Object.keys(filters)
  const optionsValues = Object.values(filters)
  const optionsLabels = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

  const dispatch = useDispatch()

  const onCheck = (option) => {
    if (option === 'all') {
      if (filters.all) {
        dispatch(clearOptions())
      } else {
        dispatch(setAllOptions())
      }
    } else {
      dispatch(toggleOption(option))
    }
  }

  const optionsDisplay = optionsKeys.map((option, index) => {
    return (
      <label htmlFor={option} key={nanoid()} className={label}>
        <input
          type="checkbox"
          name="option"
          id={option}
          className={input}
          checked={optionsValues[index]}
          onChange={() => onCheck(option)}
        />
        <span className={checkbox} />
        {optionsLabels[index]}
      </label>
    )
  })

  return (
    <div className={options}>
      <h2 className={header}>Количество пересадок</h2>
      <form className={form}>{optionsDisplay}</form>
    </div>
  )
}
