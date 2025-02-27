import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  originalSize: number;
  ease: number;
  brightness: number;

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.vx = 0;
    this.vy = 0;
    this.size = size;
    this.originalSize = size;
    this.ease = 0.1;
    this.brightness = 0;
  }

  update(mouseX: number, mouseY: number, mouseRadius: number) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const force = (mouseRadius - distance) / mouseRadius;

    // Update brightness based on distance from mouse
    if (distance < mouseRadius) {
      this.brightness = (1 - distance / mouseRadius) * 0.8;
      this.size = this.originalSize + (this.brightness * 2);
      
      const angle = Math.atan2(dy, dx);
      const pushX = Math.cos(angle) * force * 8;
      const pushY = Math.sin(angle) * force * 8;

      this.vx -= pushX;
      this.vy -= pushY;
    } else {
      this.brightness = 0;
      this.size = this.originalSize;
    }

    // Spring force back to original position
    this.vx += (this.originX - this.x) * this.ease;
    this.vy += (this.originY - this.y) * this.ease;

    // Apply velocity with damping
    this.vx *= 0.9;
    this.vy *= 0.9;

    // Update position
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D, baseColor: string, theme: string) {
    const rgb = baseColor.match(/\d+/g);
    if (!rgb) return;
    
    // Create gradient for glow effect
    if (this.brightness > 0) {
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );
      
      const glowColor = theme === 'light' 
        ? `rgba(236, 72, 153, ${this.brightness})` // Pink glow for light mode
        : `rgba(236, 72, 153, ${this.brightness})`; // Pink glow for dark mode
        
      gradient.addColorStop(0, glowColor);
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw the main dot
    ctx.fillStyle = baseColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const ParticleGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      const spacing = 30;
      const size = 2;
      
      for (let y = size; y < canvas.height; y += spacing) {
        for (let x = size; x < canvas.width; x += spacing) {
          particlesRef.current.push(new Particle(x, y, size));
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dotColor = theme === 'light' 
        ? 'rgba(75, 85, 99, 0.3)'  // gray-600 with 30% opacity for light mode
        : 'rgba(236, 72, 153, 0.2)'; // pink-500 with 20% opacity for dark mode

      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius);
        particle.draw(ctx, dotColor, theme || 'dark');
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
};

export default ParticleGrid; 