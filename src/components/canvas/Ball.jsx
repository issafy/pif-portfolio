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

const Ball = ({ isMobile }) => {
  const darkTheme = useSelector(getDarkTheme);
  const modelRef = useRef();
  const {nodes} = useGLTF("./hand.glb");

  useFrame(({ mouse, viewport }) => {
    
    const x = (mouse.x * viewport.width) / 200;
    modelRef.current.lookAt(x, 0, 1)
    
  })
  
  

  return (
    
    <group ref={modelRef} position={[0, 0, 0]} scale={isMobile ? [.75, .75, .75] : [.6, .6, .6]} dispose={null}>
      
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  

  return (
    <div className={`w-full relative  ${isMobile ? 'h-[400px] bottom-15' : 'h-[900px]'}`}>
     {/* <div> */}
      <Canvas
        // frameloop='demand'
        dpr={[1, 2]}
        camera={{position:[10, 0, 5]}}
        gl={{ preserveDrawingBuffer: true }}
        
      >
        <Suspense fallback={<CanvasLoader />}>
          
          <Ball isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
