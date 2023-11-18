import Home from './components/Home'
import './css/style.css'

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
