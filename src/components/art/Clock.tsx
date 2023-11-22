import { useEffect, useRef, useState } from "react";

export const Clock = () => {
    const [clockFont, setClockFont] = useState(0)
    const clockRef = useRef<HTMLDivElement>(null!);

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
    )
}
  