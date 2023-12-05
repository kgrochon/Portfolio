import { Canvas } from "@react-three/fiber";
import { PropsWithChildren } from "react";

const ThreeCanvas = ({children }: PropsWithChildren) => {
    return (
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {children}
      </Canvas>
    );
  };
  
  export default ThreeCanvas;