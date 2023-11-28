import '../../services/fonts.scss'
import '../../services/constants.scss'
import './App.scss'
import logo from '../../assets/img/Logo.svg'
import TransferOptions from '../TransferOptions/TransferOptions'
import SortTabs from '../SortTabs/SortTabs'
import CardList from '../CardList/CardList'
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'

function App() {
  return (
    <div className="app">
      <img alt="Aviasales logo" src={logo} />
      <div className="wrapper">
        <aside className="aside">
          <TransferOptions />
        </aside>
        <main className="main">
          <SortTabs />
          <CardList />
          <ShowMoreButton />
        </main>
      </div>
    </div>
  )
}

export default App
