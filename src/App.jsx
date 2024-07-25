import Athletes from './components/Athletes'
import athletes from './athletes.json'
import './App.css'

const App = () => {
  return (
    <div id="app">
      <h1>Athlete Roster</h1>
      <Athletes athletes={athletes} />
    </div>
  )
}

export default App
