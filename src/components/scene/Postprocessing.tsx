import { useDetectGPU } from "@react-three/drei";
import {
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { DepthOfFieldEffect, BlendFunction } from "postprocessing";
import { Ref } from "react";

type Props = { dofRef: Ref<DepthOfFieldEffect> };

const Postprocessing = (props: Props) => {
  const gpu = useDetectGPU();

  return gpu.tier === 0 || gpu.isMobile ? null : (
    <EffectComposer>
      <DepthOfField
        ref={props.dofRef}
        focalLength={0.0005}
        bokehScale={1}
        target={[-1.043, 0.703, -1.202]}
      />
      <Vignette
        offset={0.5}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};

export default Postprocessing;
