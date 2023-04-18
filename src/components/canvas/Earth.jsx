import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const world = useGLTF("./hello_world/world.glb");
  const ref = useRef();

  return (
    <>
      <group ref={ref} position={[0, -2.5, 0]}>
        <primitive object={world.scene} scale={5} position-y={0} rotation-y={0} />
        <ambientLight position={[0, 20, 0]} intensity={1} />
      </group>
    </>
  );
};

const EarthCanvas = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
