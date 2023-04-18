import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  MeshTransmissionMaterial,
  useAnimations
} from "@react-three/drei";
import { useSelector } from "react-redux";
import { getDarkTheme } from '../../utils/selectors';
import { CircleGeometry } from "three";
import { MeshPhysicalMaterial } from "three";
import CanvasLoader from "../Loader";
import { AnimationMixer, Camera } from "three";

const Ball = () => {
  const darkTheme = useSelector(getDarkTheme);
  const modelRef = useRef();
  const {nodes} = useGLTF("./hand.glb");

  useFrame(({ mouse, viewport }) => {
    
    const x = (mouse.x * viewport.width) / 200;
    modelRef.current.lookAt(x, 0, 1)
    
  })
  
  

  return (
    
    <group ref={modelRef} position={[0, 0, 0]} scale={[.7, .7, .7]} dispose={null}>
      
      <mesh
        geometry={nodes.Sphere.geometry}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial metalness={1} attach={"material"} color={"white"} roughness={.5} />
      </mesh>
      <pointLight castShadow position={[6, -6, -3]} color={"white"} intensity={.3}/>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light.geometry}
        position={[1, 1, -1]}
      >
        <meshPhongMaterial attach={"material"} color={"white"} emissiveIntensity={100} />
      </mesh>
      <pointLight castShadow position={[1, 1, -1]} color={"white"} intensity={3}/>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light.geometry}
        position={[-1, -5, -4]}
        scale={[.5, .5, .5]}
      >
        <meshPhongMaterial attach={"material"} color={"white"} emissiveIntensity={100} />
      </mesh>
      <pointLight castShadow position={[-1, -5, -4]} color={"white"} intensity={5}/>

      <mesh
        geometry={nodes.code.geometry}
      >
        <meshStandardMaterial metalness={1} attach={"material"} color={"white"} roughness={.4} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hand.geometry}
      >
        <meshStandardMaterial metalness={1} attach={"material"} color={"white"} roughness={.4} />
      </mesh>


    </group>
  );
};

const BallCanvas = () => {
  

  return (
    <div className='w-full h-[500px] relative '>
     {/* <div> */}
      <Canvas
        // frameloop='demand'
        dpr={[1, 2]}
        camera={{position:[10, 0, 5]}}
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
