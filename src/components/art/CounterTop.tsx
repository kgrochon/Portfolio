import { ReactNode } from "react";

interface CounterTopProps {
	children: ReactNode;
}
export const CounterTop = ({ children } : CounterTopProps) =>{

    return (
        <div className="counter">
            {children}
            <div className="counter-top" />
            <div className="counter-front" />
        </div>
    )
  }
