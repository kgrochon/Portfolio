import { useState } from 'react';
import Home from './components/Home'
import ScrollControl from './components/controls/ScrollControl'
import './css/style.css'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <ScrollControl setScrollPosition={setScrollPosition}>
      <nav style={{position: 'sticky', top: "0"}}>
        <ul className="nav-list">
          <li>Katherine Rochon</li>
          <div className="right-nav">
            <li>Home</li>
            <li>Experiments</li>
            <li>Career</li>
            <li>Contact</li>
            <li>{scrollPosition}</li>
          </div>
        </ul>
      </nav>
      <main>
        <Home />
      </main>
    </ScrollControl>
  )
}

export default App
