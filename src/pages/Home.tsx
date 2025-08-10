import MainCard from "../components/MainCard";
import MovingSpheres from "../components/MovingSpheres";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <MainCard />
      <Canvas
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
        orthographic
        camera={{
          zoom: 60,
          position: [0, 0, 100],
        }}
      >
        <color attach="background" args={["white"]} />
        <MovingSpheres />
      </Canvas>
    </>
  );
}
