import React, { Suspense, useEffect, useState,useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { Vector3 } from "three";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const { log } = console;

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  })
}

const Computers = ({ isMobile }) => {

  const ref = useRef();
  const building = useGLTF("./hello_world/hw_building.glb");
  const junc_box = useGLTF("./hello_world/junc_box.glb");
  const power_ports = useGLTF("./hello_world/power_ports.glb")
  const cables = useGLTF("./hello_world/cables.glb");
  const anchors = useGLTF("./hello_world/hw_anchors.glb");
  const letter_anchors = useGLTF("./hello_world/hw_anchors2.glb");
  const glass_letters = useGLTF("./hello_world/glass_letters.glb");
  const light_letters = useGLTF("./hello_world/light_letters.glb");
  
  let darkTheme = true;
  const [hover, setHover] = useState(false);

  useFrame(({ mouse, viewport }) => {
    
    let x = mouse.x > 0 ? (mouse.x * viewport.width) / 30 : (mouse.x * viewport.width) / 50;
    const y = (mouse.y * viewport.height) / 40
    ref.current.lookAt(x, y, 1)
    
  })

  return (
    <group
      ref={ref}
      position={[-.5, -.1, 0]}
      // rotation={[ Math.PI/4 , -Math.PI/2, Math.PI]}
      // rotation={[ Math.PI , Math.PI, 0]}
      rotateX={Math.PI}
      
    >
      {/* <axesHelper /> */}
      <mesh
        castShadow receiveSHadow
        geometry={building.nodes.Cube.geometry}
        material={building.materials["Concrete"]}
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
          color={"green"}
          castShadow
          shadow-mapSize={128}
        />
      </mesh>

      <mesh
        castShadow receiveShadow
        geometry={junc_box.nodes.junc_box.geometry}
        material={junc_box.materials["GrayRoughMetal"]}
      >
      </mesh>

      <mesh castShadow receiveShadow
        geometry={power_ports.nodes.power_ports.geometry}
        material={power_ports.materials["RedRoughMetal"]}
      >
      </mesh>

      <mesh castShadow receiveShadow
        geometry={cables.nodes.cables.geometry}
        material={cables.materials["DarkCable"]}
      >
      </mesh>

      <mesh castShadow receiveShadow
        geometry={letter_anchors.nodes.letter_anchors.geometry}
        material={cables.materials["DarkCable"]}
      >
      </mesh>

      <mesh castShadow receiveShadow
        geometry={anchors.nodes.anchors.geometry}
        material={anchors.materials["SmoothSilver"]}
      >
      </mesh>

      <mesh castShadow 
        geometry={glass_letters.nodes.glass_letters.geometry}
      >
        <MeshTransmissionMaterial attach={"material"} samples={16} transmission={1} resolution={128} anisotropy={1} thickness={.3} roughness={0.5} toneMapped={true} />
      </mesh>

      <mesh castShadow 
        geometry={light_letters.nodes.light_letters.geometry}
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
      
      // frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 0, 8]}}
      gl={{ preserveDrawingBuffer: true }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
      
        {/* <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        /> */}
        <Computers isMobile={isMobile} />
        <Rig />
      </Suspense>

      <Preload all />

    </Canvas>
  );
};

export default ComputersCanvas;
