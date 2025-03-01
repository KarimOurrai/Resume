import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface CubeFace {
  rotation: [number, number, number];
  logo: string;
}

const CUBE_FACES: CubeFace[] = [
  { rotation: [0, 0, 0], logo: '/logos/java.svg' },      // Front
  { rotation: [0, 180, 0], logo: '/logos/spring.svg' },  // Back
  { rotation: [0, 90, 0], logo: '/logos/react.svg' },    // Right
  { rotation: [0, -90, 0], logo: '/logos/angular.svg' }, // Left
  { rotation: [90, 0, 0], logo: '/logos/docker.svg' },   // Top
  { rotation: [-90, 0, 0], logo: '/logos/git.svg' }      // Bottom
];

const TechCube = () => {
  const { theme } = useTheme();
  const cubeRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);

  useEffect(() => {
    const rotateCube = () => {
      if (isAnimating) return;

      setIsAnimating(true);
      const nextIndex = (currentFaceIndex + 1) % CUBE_FACES.length;
      const face = CUBE_FACES[nextIndex];
      
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${face.rotation[0]}deg) rotateY(${face.rotation[1]}deg) rotateZ(${face.rotation[2]}deg)`;
      }

      setTimeout(() => {
        setCurrentFaceIndex(nextIndex);
        setIsAnimating(false);
      }, 1000);
    };

    const intervalId = setInterval(rotateCube, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentFaceIndex, isAnimating]);

  return (
    <div className="w-full h-[300px] flex items-center justify-center perspective-1000">
      <div 
        ref={cubeRef}
        className="relative w-32 h-32 transform-style-3d transition-all duration-1000 ease-in-out"
        style={{
          transform: `rotateX(${CUBE_FACES[currentFaceIndex].rotation[0]}deg) rotateY(${CUBE_FACES[currentFaceIndex].rotation[1]}deg) rotateZ(${CUBE_FACES[currentFaceIndex].rotation[2]}deg)`
        }}
      >
        {CUBE_FACES.map((face, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center justify-center ${
              theme === 'light' ? 'bg-white/80' : 'bg-[#1e2329]/80'
            } backdrop-blur-sm border border-pink-500/20 transform-style-3d backface-hidden shadow-lg`}
            style={{
              transform: `
                ${index === 0 ? 'translateZ(64px)' : ''}
                ${index === 1 ? 'translateZ(-64px) rotateY(180deg)' : ''}
                ${index === 2 ? 'translateX(64px) rotateY(90deg)' : ''}
                ${index === 3 ? 'translateX(-64px) rotateY(-90deg)' : ''}
                ${index === 4 ? 'translateY(-64px) rotateX(90deg)' : ''}
                ${index === 5 ? 'translateY(64px) rotateX(-90deg)' : ''}
              `
            }}
          >
            <img 
              src={face.logo} 
              alt={face.logo.split('/').pop()?.replace('.svg', '') || 'Logo'} 
              className="w-16 h-16 object-contain transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCube; 