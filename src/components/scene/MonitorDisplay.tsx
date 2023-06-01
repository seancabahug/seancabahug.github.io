import { useVideoTexture } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { projectShowcase } from "../../consts";
import { animate, useMotionValue } from "framer-motion";
import TransitionShaderMaterial from "../../shaders/TransitionShader";

type Props = { currentProjectId: number; previousProjectId: number };

type VideoTextureMaterialProps = { beforeUrl: string; afterUrl: string };
const VideoTextureMaterial = (props: VideoTextureMaterialProps) => {
  const previousUrl = useRef("/videos/loading.mp4");
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const beforeVideo = useVideoTexture(previousUrl.current, {});
  const afterVideo = useVideoTexture(props.afterUrl, {});

  const progress = useMotionValue(0);

  useEffect(() => {
    if (props.afterUrl == previousUrl.current) return;

    const isProgressZero = progress.get() == 0;
    animate(progress, isProgressZero ? 1 : 0, {
      duration: 0.75,
      onPlay: () => {
        materialRef.current!.uniforms["uTexture1"].value = isProgressZero ? beforeVideo : afterVideo;
        materialRef.current!.uniforms["uTexture2"].value = isProgressZero ? afterVideo : beforeVideo;
      },
      onUpdate: (latest) => {
        materialRef.current!.uniforms["uProgress"].value = latest;
      },
    });

    previousUrl.current = props.afterUrl;
  }, [props.afterUrl]);

  return <TransitionShaderMaterial ref={materialRef} />;
};

const getUrlFromId = (projectId: number) =>
  projectId > -1
    ? projectShowcase[projectId].demoVideoPath
    : "/videos/default.mp4";

const MonitorDisplay = (props: Props) => {
  const beforeUrl = getUrlFromId(props.previousProjectId);
  const afterUrl = getUrlFromId(props.currentProjectId);

  return (
    <mesh
      position={[0.829, 1.231, -0.005]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={[1.88, 1.05, 1]}
    >
      <planeGeometry />
      <VideoTextureMaterial beforeUrl={beforeUrl} afterUrl={afterUrl} />
    </mesh>
  );
};

export default MonitorDisplay;
