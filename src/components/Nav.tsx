import { useState } from 'react';
import SlideSwitch from './SlideSwitch';

interface Props {
  scrollPosition: number;
}

function Nav({ scrollPosition } : Props) {
  const [terminals, ] = useState([3, 47, 87, 126])


  return (
      <nav className="nav" style={{height: .6 * window.innerHeight + "px"}}>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        <SlideSwitch terminals={terminals} scrollPosition={scrollPosition} switchHeight={.6 * window.innerHeight} />
      </nav>
  )
}

export default Nav;
