import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  MeshTransmissionMaterial
} from "@react-three/drei";
import { useSelector } from "react-redux";
import { getDarkTheme } from '../../utils/selectors';
import { gsap } from "gsap";

import CanvasLoader from "../Loader";
import { AnimationMixer } from "three";

const Ball = () => {
  const darkTheme = useSelector(getDarkTheme);
  const modelRef = useRef();
  const {nodes,scene,animations} = useGLTF("./hand.glb");

  useFrame(({ mouse, viewport }) => {
    
    const x = (mouse.x * viewport.width) / 100;
    modelRef.current.lookAt(x, 0, 1)
    
  })

  return (
    
    <group ref={modelRef} scale={[1.5, 1.5, 1.5]} dispose={null}>
      
      <spotLight position={[0, 2, 0]} intensity={darkTheme ? 100 : 10}/>
      <spotLight position={[3, 8, 0]} intensity={darkTheme ? 100 : 10}/>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hand.geometry}
        rotateY={Math.PI}
        onClick={() => dispatchEvent}
      >
        
        <MeshTransmissionMaterial metalness={0} attach={"material"} samples={8} transmission={1} resolution={32} anisotropy={1} roughness={0.3} />
      </mesh>
    </group>
  );
};

const BallCanvas = () => {


  return (
    <div className='w-full h-[500px] relative '>
      <Canvas
        // frameloop='demand'
        dpr={[1, 2]}
        camera={{ position: [10, 0, 0]}}
        gl={{ preserveDrawingBuffer: true }}
        
      >
        <Suspense fallback={<CanvasLoader />}>
          <Ball />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
