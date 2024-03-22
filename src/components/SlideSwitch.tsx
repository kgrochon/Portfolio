import { animated, config, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useEffect, useState } from "react";
import { maxWidth, maxHeight, minHeight, maxWidthHandle, maxHeightHandle, minWidthHandle, minHeightHandle, minWidth } from "./Constants";

interface Props {
    terminals: number[];
    scrollPosition: number;
    switchHeight: number;
}

const handleOffset = 5;

function SlideSwitch({ terminals, switchHeight, scrollPosition }: Props) {
    const [width, setWidth] = useState(maxWidth);
    const [handleWidth, setHandleWidth] = useState(maxWidth);
    const [handleHeight, setHandleHeight] = useState(maxHeight);

    const [handleProps, handleApi] = useSpring(() => ({
        top: `0px`,
        config: {
            // mass: 5,
            friction: 20,
            tension: 210,
            clamp: true,
        },
    }));

    // Udate nav height from scroll value
    useEffect(() => {
        // Switch board width
        let bWidth = Math.max(minWidth, maxWidth - (maxWidth * scrollPosition / 100));
        setWidth(bWidth)
        console.log(bWidth)
        const hWidth = Math.max(minWidthHandle, maxWidthHandle - (maxWidthHandle * scrollPosition / 100));
        const hHeight = Math.max(minHeightHandle, maxHeightHandle - (maxHeightHandle * scrollPosition / 100));
        setHandleWidth(hWidth);
        setHandleHeight(hHeight);
        console.log(hWidth, hHeight)
    }, [scrollPosition]);

    // Lock Terminal Position
    const lockTerminal = (offset: number, down: boolean) => {
        if (down) {
            // When dragging
            if (offset < 0) {
                // Handle negative offset
                return "0px";
            } 
            if (offset < switchHeight - handleOffset * 2) {
                // Handle offset within switchHeight
                return `${offset}px`;
            } 
            // Handle offset exceeding switchHeight
            return `${switchHeight - handleOffset * 2}px`;
        } 
        
        // When releasing
        const closestTerminal = findClosestTerminal(offset);
        return `${closestTerminal}px`;
    };

    // Helper function to find closest terminal
    const findClosestTerminal = (offset: number) => {
        return terminals.reduce((closest, current) => {
            return Math.abs(current - offset) < Math.abs(closest - offset)
                ? current
                : closest;
        });
    };

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ down, xy }) => {
        const pageOffset = document
            .getElementById("slide-switch")!
            .getBoundingClientRect().top;
        handleApi.start({
            top: lockTerminal(xy[1] - pageOffset - handleOffset, down),
        });
    });

    return (
        <div
            id="slide-switch"
            className="slide-switch"
            style={{
                width:`${width}px`,
            }}>
            <div className="sliding-contact">
                <animated.div
                    className="handle"
                    style={{width: `${handleWidth}px`,
                    height: `${handleHeight}px`, ...handleProps }}
                        {...bind()}>
                    <div className="box"/>
                </animated.div>
            </div>
        </div>
    );
}

export default SlideSwitch;
