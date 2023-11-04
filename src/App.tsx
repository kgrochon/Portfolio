import Career from './components/Career'
import Contact from './components/Contact'
import Experiments from './components/Experiments'
import Home from './components/Home'
import './scss/style.css'

function App() {

  return (
    <>
      <nav>
        <ul className="nav-list">
          <li>Katherine Rochon</li>
          <div className="right-nav">
            <li>Home</li>
            <li>Experiments</li>
            <li>Career</li>
            <li>Contact</li>
          </div>
        </ul>
      </nav>
      <main>
        <Home />
      </main>
    </>
  )
}

export default App
