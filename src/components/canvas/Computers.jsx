import React, { Suspense, useEffect, useState,useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { Vector3 } from "three";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const { log } = console;

// const Rig = () => {
//   const { camera, mouse } = useThree();
//   const vec = new Vector3();

//   return useFrame(() => {
//     camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
//     camera.lookAt(0, 0, 0);
//   })
// }

const Computers = ({ isMobile }) => {

  const ref = useRef();
  
  const final = useGLTF("./hello_world/final.glb");;
  

  return (
    <group
      ref={ref}
      scale={!isMobile ? [1.4, 1.4, 1.4] : [.8, .8, .8]}
      position={[-.5, -.1, 0]}
      
    >
      {/* <axesHelper /> */}
      <mesh
        castShadow receiveSHadow
        geometry={final.nodes.Cube.geometry}
        material={final.materials["Concrete"]}
      >
        <hemisphereLight intensity={2} position={[ 5, 2, 2 ]} groundColor='black' />
        <spotLight
          position={[10, 3, 20]}
          angle={Math.PI/2}
          penumbra={1}
          color={"yellow"}
          intensity={2}
          castShadow
          shadow-mapSize={128}
        />
        <spotLight
          position={[-10, 3, 20]}
          angle={-Math.PI/2}
          penumbra={1}
          intensity={2}
          color={"yellow"}
          castShadow
          shadow-mapSize={128}
        />
      </mesh>

      <mesh
        castShadow receiveShadow
        geometry={final.nodes.junc_box.geometry}
        material={final.materials["GrayRoughMetal"]}
      >
      </mesh>

      <mesh castShadow receiveShadow
        geometry={final.nodes.power_ports.geometry}
        material={final.materials["RedRoughMetal"]}
      >
      </mesh>

      <mesh castShadow receiveShadow
        geometry={final.nodes.cables.geometry}
        material={final.materials["DarkCable"]}
      >
      </mesh>

      <mesh castShadow receiveShadow
        geometry={final.nodes.letter_anchors.geometry}
        material={final.materials["DarkCable"]}
      >
      </mesh>

      <mesh castShadow receiveShadow
        geometry={final.nodes.anchors.geometry}
        material={final.materials["SmoothSilver"]}
      >
      </mesh>

      <mesh castShadow 
        geometry={final.nodes.glass_letters.geometry}
      >
        <MeshTransmissionMaterial attach={"material"} samples={16} transmission={1} resolution={128} anisotropy={1} thickness={.3} roughness={0.5} toneMapped={true} />
      </mesh>

      <mesh castShadow 
        geometry={final.nodes.light_letters.geometry}
      >
        {/* <pointLight intensity={1} />  */}
        {/* <meshLambertMaterial attach="material" emissive={"green"} emissiveIntensity={darkTheme ? 100 : -1} /> */}
        <meshPhongMaterial color={"white"} emissive={"white"} emissiveIntensity={100}/>
      </mesh>

    </group>
    
  );
};

const ComputersCanvas = () => {
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
    <Canvas
      
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [8, 0, 8]}}
      gl={{ preserveDrawingBuffer: true }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
      
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 3}
        />
        <Computers isMobile={isMobile} />
        {/* <Rig /> */}
      </Suspense>

      <Preload all />

    </Canvas>
  );
};

export default ComputersCanvas;
