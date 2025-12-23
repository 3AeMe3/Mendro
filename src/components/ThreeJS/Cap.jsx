import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function WearModel() {
  const { scene } = useGLTF('/models/hoody.glb');

  return <primitive object={scene} scale={6} position={[0, -7, 0]} />;
}

export default function Cap() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <WearModel />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={1} />
    </Canvas>
  );
}
