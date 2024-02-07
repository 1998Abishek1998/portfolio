import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from './CanvasLoader';
import { Fox } from '../../models/Fox';

const FoxCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <directionalLight position={[0, 0, 1]} intensity={2.5} />
      <ambientLight intensity={1} />
      <pointLight position={[5, 10, 0]} intensity={2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
      />

      <Suspense fallback={<CanvasLoader />}>
        <Fox
          currentAnimation={"walk"}
          position={[0.5, 0.35, 0]}
          rotation={[12.629, -0.6, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
      </Suspense>
    </Canvas>
  );
};

export default FoxCanvas;
