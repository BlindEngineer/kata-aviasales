import './SortTabs.scss'
import { useSelector, useDispatch } from 'react-redux'

import { toggleTab } from '../../store/sortSlice'

export default function SortTabs() {
  const activeTab = useSelector((state) => state.sortReducer.activeTab)
  const dispatch = useDispatch()
  const buttonClasses = 'sort-tabs__button'

  return (
    <div className="sort-tabs">
      <button
        type="button"
        className={`${buttonClasses} sort-tabs__button--left ${
          activeTab === 'cheapest' ? 'sort-tabs__button--active' : null
        }`}
        onClick={() => dispatch(toggleTab('cheapest'))}
      >
        Самый дешёвый
      </button>
      <button
        type="button"
        className={`${buttonClasses} sort-tabs__button--right ${
          activeTab === 'fastest' ? 'sort-tabs__button--active' : null
        }`}
        onClick={() => dispatch(toggleTab('fastest'))}
      >
        Самый быстрый
      </button>
    </div>
  )
}
