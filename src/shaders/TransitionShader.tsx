import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { ForwardedRef, useMemo } from "react";
import React from "react";
// Shaders
const vertexShader = `
    precision mediump float;

    varying vec2 vUv;
    uniform float uTime; 

    void main()
    {
      vUv = uv;

      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;

      gl_Position = projectedPosition;
    }
  `;
const fragmentShader = `
  precision mediump float;
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;

  
  varying vec2 vUv;
  
  mat2 rotate(float a) {
    float s = sin(a);
    float c = cos(a);
    return	mat2(c, -s, s, c);
  }
  
  void main()
  { 
    vec2 uvDivided = fract(vUv*vec2(30.,1.));
    vec2 uvDisplaced1 = vUv + rotate(3.14)*uvDivided*vec2(uProgress*vUv.x/4., 0. ) * 0.5;
    vec2 uvDisplaced2 = vUv + rotate(3.14)*uvDivided*vec2((1.- uProgress)*vUv.x/4., 0. ) * 0.5;

    vec4 img1 = texture2D(uTexture1, uvDisplaced1);
    vec4 img2 = texture2D(uTexture2, uvDisplaced2);
    vec4 mixed = mix(img1, img2, uProgress);

    // whenever you figure out how to disable tonemapping, remove gamma correction below
    float gamma = 0.6;
    vec4 gammaCorrected = pow(mixed, vec4(1.0 / gamma));
    gl_FragColor = gammaCorrected;
  }

  `;

const TransitionShaderMaterial = React.forwardRef(
  (props: {}, ref: ForwardedRef<THREE.ShaderMaterial>) => {
    const uniforms = useMemo(
      () => ({
        uProgress: { value: 0 },
        uTexture1: { value: new THREE.Texture() },
        uTexture2: { value: new THREE.Texture() },
        uUVAspect: { value: 1 },
      }),
      []
    );

    return (
      <shaderMaterial
        ref={ref}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        toneMapped={false}
      />
    );
  }
);

export default TransitionShaderMaterial;
