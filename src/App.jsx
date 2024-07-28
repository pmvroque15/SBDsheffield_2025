import Athletes from './components/Athletes'
import athletes from './athletes.json'
import NavBar from './components/NavBar'
import './App.css'

const App = () => {
  return (
    <div id="app">
      <NavBar />
      <img
        id="SHEFFIELD"
        src="https://sbdapparel.com/cdn/shop/files/sheffield_logo_25.png?v=1710277725&width=480"
        alt="SHEFFIELD25"
      ></img>
      <h1>Athlete Roster</h1>
      <Athletes athletes={athletes} />
    </div>
  )
}

export default App
