import { useRef } from "react";

export const Sun = () => {
    const sunRef = useRef<HTMLDivElement>(null!);
    return (
        <div ref={sunRef} className="news-sun sun">
            <div className="half" />
            <div className="half bottom" />
        </div>
    )
}