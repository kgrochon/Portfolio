import "../../css/news.css";
import { LavaLamp } from "./LavaLamp";
import { Klock } from "./Klock";
import { Sun } from "./Sun";
import { CounterTop } from "./CounterTop";

function News() {
 
    return (
        <>
            <div id="news" className="background" style={{backgroundColor: `${document.body.getAttribute("backgroundColor")}`}}>
                {/* Window */}
                <div className="window">
                    <div className="outside" />
                    <Sun />
                </div>    
                <CounterTop>
                    <Klock />
                    <LavaLamp />
                </CounterTop>
            </div>
        </>
    )
  }
  
  export default News;
  