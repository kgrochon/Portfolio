import { useEffect, useState } from "react";
import SlideSwitch from "./SlideSwitch";
import "../css/nav.css";
import { maxHeight, minHeight } from "./Constants";

interface Props {
    scrollPosition: number;
}

function Nav({ scrollPosition }: Props) {
    const [terminals] = useState([3, 47, 87, 126]);
    const [height, setHeight] = useState(maxHeight);

    // Udate nav height from scroll value
    useEffect(() => {
        let height = maxHeight - (maxHeight * scrollPosition / 100);
        height = Math.max(height, minHeight);
        setHeight(height)
    }, [scrollPosition]);

    return (
        <nav className="nav" style={{height:`${height}px`}}>
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
            <SlideSwitch
                terminals={terminals}
                scrollPosition={scrollPosition}
                switchHeight={0.6 * window.innerHeight}
            />
        </nav>
    );
}

export default Nav;
