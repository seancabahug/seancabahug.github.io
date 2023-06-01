import { useFrame } from "@react-three/fiber";
import { Model as SceneMesh } from "./SceneMesh";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { DepthOfFieldEffect } from "postprocessing";
import { RefObject, useRef, useState } from "react";
import { Euler, MathUtils, Quaternion, Vector3 } from "three";
import HtmlMeshOverlay from "./HtmlMeshOverlay";
import MonitorDisplay from "./MonitorDisplay";
import {
  SceneControlValues,
  SceneSection,
  sectionTimings,
  sectionValues,
  projectShowcase,
} from "../../consts";

function desiredFromScroll(scrollOffset: number): SceneControlValues {
  let valuesIndex = sectionTimings.length;
  for (let i = 1; i < sectionTimings.length; i++) {
    if (scrollOffset <= sectionTimings[i]) {
      valuesIndex = i - 1;
      break;
    }
  }

  let beforeIndex = valuesIndex;
  let afterIndex = valuesIndex + 1;

  let before = sectionValues[beforeIndex]!;
  if (before == null) {
    before = sectionValues[beforeIndex - 1]!;
  }

  if (afterIndex >= sectionValues.length) return before;
  let after = sectionValues[afterIndex]!;
  if (after == null) return before;

  let beforeOffset = sectionTimings[beforeIndex];
  let afterOffset = sectionTimings[afterIndex];
  let interpFactor =
    (scrollOffset - beforeOffset) / (afterOffset - beforeOffset);

  let a = new Quaternion().slerpQuaternions(
    before.camera.rotation,
    after.camera.rotation,
    interpFactor
  );

  let section = SceneSection.TRANSITION;
  if (scrollOffset < 0.01) section = sectionValues[0]!.section;
  else if (scrollOffset > 0.99)
    section = sectionValues[sectionValues.length - 1]!.section;

  return {
    section: section,
    camera: {
      position: new Vector3().lerpVectors(
        before.camera.position,
        after.camera.position,
        interpFactor
      ),
      rotation: a,
    },
    dof: {
      target: new Vector3().lerpVectors(
        before.dof.target,
        after.dof.target,
        interpFactor
      ),
      bokehScale: MathUtils.lerp(
        before.dof.bokehScale,
        after.dof.bokehScale,
        interpFactor
      ),
    },
  };
}

type SceneProps = {
  dofRef: RefObject<DepthOfFieldEffect>;
};

const totalPages = 4 + projectShowcase.length;
const projectSectionPosition = 4 / totalPages;

export default function Scene({ dofRef }: SceneProps) {
  const scroll = useScroll();

  const [currentSection, setCurrentSection] = useState(SceneSection.NAME);
  const [currentProjectId, setCurrentProjectId] = useState(-1);
  const [previousProjectId, setPreviousProjectId] = useState(-1);
  const meshRef = useRef<THREE.Group>(null);

  useFrame(({ camera }, delta) => {
    let desired = desiredFromScroll(scroll.offset);

    camera.position.lerp(desired.camera.position, delta * 3);
    camera.quaternion.slerp(desired.camera.rotation, delta * 3);

    if (dofRef.current != null) {
      let dof = dofRef.current!;
      dof.target.lerp(desired.dof.target, delta * 3);
      dof.bokehScale = MathUtils.lerp(
        dof.bokehScale,
        desired.dof.bokehScale,
        delta * 2
      );
    }

    if (currentSection != desired.section) setCurrentSection(desired.section);

    let projectId;
    if (scroll.offset >= projectSectionPosition)
      projectId = Math.floor(scroll.offset * totalPages) - 4;
    else projectId = -1;

    if (currentProjectId != projectId) {
      setPreviousProjectId(currentProjectId);
      setCurrentProjectId(projectId);
    }
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={35.98}
        position={[-1.138, 1.7, -0.891]}
        rotation={[-1.506, -0.146, -1.5]}
      />
      <SceneMesh ref={meshRef} />
      <MonitorDisplay
        previousProjectId={previousProjectId}
        currentProjectId={currentProjectId}
      />
      <HtmlMeshOverlay
        currentSection={currentSection}
        currentProjectId={currentProjectId}
      />
    </>
  );
}
