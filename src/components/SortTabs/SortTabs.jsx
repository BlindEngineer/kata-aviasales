import { useSelector, useDispatch } from 'react-redux'

import { toggleTab } from '../../store/sortSlice'

import classes from './SortTabs.module.scss'

export default function SortTabs() {
  const activeTab = useSelector((state) => state.sortReducer.activeTab)
  const dispatch = useDispatch()
  const {
    'sort-tabs': sortTabs,
    'sort-tabs__button': button,
    'sort-tabs__button--active': active,
    'sort-tabs__button--left': left,
    'sort-tabs__button--right': right,
  } = classes

  return (
    <div className={sortTabs}>
      <button
        type="button"
        className={`${button} ${left} ${activeTab === 'cheapest' ? active : null}`}
        onClick={() => dispatch(toggleTab('cheapest'))}
      >
        Самый дешёвый
      </button>
      <button
        type="button"
        className={`${button} ${right} ${activeTab === 'fastest' ? active : null}`}
        onClick={() => dispatch(toggleTab('fastest'))}
      >
        Самый быстрый
      </button>
    </div>
  )
}
