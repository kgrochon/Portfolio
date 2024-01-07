import ThreeLava from "./ThreeLava";
import ThreeCanvas from "../../lib/ThreeCavas";

export const LavaLamp = () => {
    return (
        <div className="lava-lamp">
                <div className="top" />
                <div className="mid">
                    <ThreeCanvas>
                        <ThreeLava />
                    </ThreeCanvas>
                </div>
                <div className="base">
                    <div className="rise"/>
                    <div className="rest" />
                </div>
            </div>
    )
}