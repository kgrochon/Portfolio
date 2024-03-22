import { ReactNode, useEffect, useRef } from "react";
import { maxScrollHeight } from "../Constants";

interface ScrollProps {
    children?: ReactNode;
    setScrollPosition: (pos: number) => void;
}
function ScrollControl({ children, setScrollPosition }: ScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = scrollRef.current.scrollTop;
            const scrollPercent = Math.round(100 * scroll / maxScrollHeight);
            setScrollPosition(scrollPercent);
        };
        scrollRef.current.addEventListener("scroll", handleScroll);

        return () => {
            scrollRef.current.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={scrollRef}
            style={{
                position: "relative",
                top: 0,
                left: 0,
                height: `100vh`,
                width: `100vw`,
                overflow: "scroll",
            }}
            className="content-container"
        >
            {children}
        </div>
    );
}

export default ScrollControl;
