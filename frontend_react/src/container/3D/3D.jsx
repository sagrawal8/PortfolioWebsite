import React, { Suspense } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import Model from '../../model';
import './3D.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const threeD = () => {

  return (
    <div className="app__3D">
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: '#111a21',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default threeD