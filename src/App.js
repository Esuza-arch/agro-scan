import {useState} from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'

function App() {
  const [searchResults, setSearchResults] = useState([])
  return (
    <div>
      <NavBar />
      <Home />
      <Search />
    </div>
  )
}

export default App
