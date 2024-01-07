import { useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react'

interface Props {
    terminals: number[];
    scrollPosition: number;
    switchHeight: number;
}

const handleOffset = 5;


function SlideSwitch({ terminals, switchHeight } : Props) {
  const [props, api] = useSpring(() => ({ 
    top: `0px`,
    config: {
        // mass: 5,
        friction: 20,
        tension: 210,
        clamp: true
    }, }))

    // Determine handle position
    const lockTerminal = (offset: number, down: boolean) => {
        if (down) {
            console.log(offset)
            if (offset < 0) {
                return 0 + "px";
            } else if (offset < switchHeight - handleOffset*2) {
                return offset + "px" ;
            } else {
                return switchHeight - handleOffset*2 + "px" ;
            }
        } else {    
            const t = terminals.reduce(function (closest, current) {
                return Math.abs(current - offset) < Math.abs(closest - offset) ? current : closest;
                });
            return t + "px" ;
        }
    }

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ down, xy }) => {
        const pageOffset = document.getElementById('slide-switch')!.getBoundingClientRect().top;
        api.start({ 
            top: lockTerminal(xy[1] - pageOffset - handleOffset, down)
        })
    })

    useEffect(() => {

    },[])


  return (
    <div id="slide-switch" className="slide-switch" style={{height: switchHeight + "px"}}>
        <div className="sliding-contact">
        <animated.div className="handle"  style={{height: handleOffset * 2 +"px", ...props}} {...bind()}>
            <div className="box" />
        </animated.div>
        </div>
    </div>
  )
}

export default SlideSwitch;
