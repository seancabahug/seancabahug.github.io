import { Loader, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Scene from "./components/scene/Scene";
import { DepthOfFieldEffect } from 'postprocessing';

import "./App.css";
import Postprocessing from "./components/scene/Postprocessing";
import { projectShowcase } from "./consts";

function App() {
  const dofRef = useRef<DepthOfFieldEffect>(null);

  return (
    <>
      <Canvas dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls pages={4 + projectShowcase.length}>
            <Scene dofRef={dofRef} />
            <Postprocessing dofRef={dofRef} />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
