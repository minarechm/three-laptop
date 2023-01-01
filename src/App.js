import { Canvas } from "@react-three/fiber";
import { Html, ContactShadows, useGLTF, OrbitControls, Environment, Float, Center} from "@react-three/drei"

const Scene = () => {
  const model = useGLTF("./model.gltf")
  return (
    <>
    <Float>
      <Center> 
        <Environment preset="city"/>
        <color args={["#2596be"]} attach="background"/>
        <OrbitControls
          minPolarAngle={Math.PI / 2.2} 
          maxPolarAngle={Math.PI / 2.5}
          minAzimuthAngle={Math.PI / 54.7}
          maxAzimuthAngle={Math.PI / 4.3}
        />
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ff6900"}
          rotation={ [0.1, Math.PI, 0]}
          position={ [0, 0.55, -1.15]}
        />
        <primitive object={model.scene}>
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={ [0, 1.56, -1.4]}
            rotation-x={ - 0.256}
          >
            <iframe src="https://minarechm.github.io/three-donuts/"></iframe>
          </Html>
        </primitive>
      </Center>
    </Float>
    <ContactShadows 
      position-y={ - 1.4 }
      opacity={0.4}
      blur={1}
      scale={5}
    />
    </>
  )
}

function App() {
  return (
    <Canvas>
      <Scene/>
    </Canvas>
  );
}

export default App;
