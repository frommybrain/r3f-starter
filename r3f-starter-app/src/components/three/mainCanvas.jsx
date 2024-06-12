'use client'
import React from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { MainScene } from './mainScene';

export function MainCanvas() {
    return (
        <div className="w-[100vw] h-[100dvh] bg-dark-sky-blue fixed top-0 left-0 bg-red-500">
            <Canvas>
                <Environment files="/images/round_platform_4k.jpg" />
                <directionalLight position={[10, 7, -3.5]} intensity={0.5} />
                <OrbitControls makeDefault />
                <MainScene />
            </Canvas>
        </div>
    );
}
