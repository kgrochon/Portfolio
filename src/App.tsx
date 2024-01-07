import { useState } from 'react';
import ScrollControl from './components/controls/ScrollControl'
import './css/style.css'
import headshot from "./assets/katherine.png";
import Nav from './components/Nav';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);


  return (
    <ScrollControl setScrollPosition={setScrollPosition}>
      <div style={{position: "absolute", width: "100%"}}>
        <header>
          <h1>KATHERINE ROCHON</h1>
          <h2 className="header-h2">Software Engineer</h2>
        <Nav scrollPosition={scrollPosition} />
        </header>
      </div>
      <main>
        {/* Home  */}
        <div className="section"></div>
        {/* About  */}
        <div className="section about">
          <div className="grid-container-al">
            <img src={headshot} alt={"Katherine smiling with a cat"} />
          </div>
          <section className="content">
            <p>
              My name is Kat.
              I’m a software engineer and design enthusiast. 
            </p>
            <p>
              I work at Alchemie, 
              an EdTech startup focused on making 
              accessible & interactive tools for learning.
            </p>
          </section>
        </div>
        {/* Work  */}
        <div className="section">
          Work TBA...
        </div>
        {/* Contact */}
        <div  className="section">
          Career TBA...
        </div>
        <p style={{position: "fixed", bottom: 0}}>{scrollPosition}</p>
      </main>
    </ScrollControl>
  )
}

export default App
