import { useEffect, useRef, useState } from "react";
import "../../css/news.css";
// Home Conent
function News() {

    const [clockFont, setClockFont] = useState(0)
    const clockRef = useRef<HTMLDivElement>(null!);
    const sunRef = useRef<HTMLDivElement>(null!);

    function formatTime(date: Date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes;
        var strTime = hours + ':' + ((minutes < 10) ? '0' :'') + minutes + ampm;
        return strTime;
      }

    const [date, setDate] = useState(formatTime(new Date));
  
    function refreshClock() {
      setDate(formatTime(new Date()));
    }

    useEffect(() => {
        function handleResize() {
            setClockFont(clockRef.current.clientHeight*.8);
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        const timerId = setInterval(refreshClock, 1000);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearInterval(timerId);
        };
    }, []);
    return (
        <>
            <div id="news" className="background" style={{backgroundColor: `${document.body.getAttribute("backgroundColor")}`}}>
                {/* Window */}
                <div className="window">
                    <div className="outside" />
                    <div ref={sunRef} className="news-sun sun">
                        <div className="half" />
                    </div>
                </div>
                
                <div className="counter">
                    {/* Clock */}
                    <div className="clock">
                        <div className="top" />
                        <div className="front">
                            <div className="panel left-panel" />
                            <div ref={clockRef} className="face">
                                <p style={{fontSize: `${clockFont}px`, lineHeight: `${clockFont}px`}}>
                                    {date}
                                </p>
                            </div>
                            <div className="panel right-panel" />
                        </div>
                    </div>
                    <div className="counter-top" />
                    <div className="counter-front" />
                </div>
            </div>
            <div></div>
        </>
    )
  }
  
  export default News;
  