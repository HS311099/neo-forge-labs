import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Particle system component
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    
    return positions;
  }, []);

  // Animate particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      
      // Pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8A2BE2"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Constellation lines component
function ConstellationLines() {
  const ref = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    
    // Create constellation connections
    for (let i = 0; i < 200; i++) {
      const x1 = (Math.random() - 0.5) * 40;
      const y1 = (Math.random() - 0.5) * 40;
      const z1 = (Math.random() - 0.5) * 40;
      
      const x2 = x1 + (Math.random() - 0.5) * 5;
      const y2 = y1 + (Math.random() - 0.5) * 5;
      const z2 = z1 + (Math.random() - 0.5) * 5;
      
      positions.push(x1, y1, z1, x2, y2, z2);
      
      // Gradient colors
      const color1 = new THREE.Color(0x8A2BE2);
      const color2 = new THREE.Color(0x00FFFF);
      
      colors.push(color1.r, color1.g, color1.b);
      colors.push(color2.r, color2.g, color2.b);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

// Main Three.js background component
export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8A2BE2" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
        
        <ParticleField />
        <ConstellationLines />
      </Canvas>
    </div>
  );
}