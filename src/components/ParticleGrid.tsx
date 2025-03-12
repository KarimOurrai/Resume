import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  originalSize: number;
  brightness: number;
  maxSpeed: number;
  springStrength: number;

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.vx = 0;
    this.vy = 0;
    this.size = size;
    this.originalSize = size;
    this.brightness = 0;
    this.maxSpeed = 1.5;
    this.springStrength = 0.1; // Strength of return to grid position
  }

  update(mouseX: number, mouseY: number, mouseRadius: number, scrollSpeed: number) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const force = (mouseRadius - distance) / mouseRadius;

    // Calculate spring force back to original position
    const springX = (this.originX - this.x) * this.springStrength;
    const springY = (this.originY - this.y) * this.springStrength;

    // Apply forces
    if (distance < mouseRadius) {
      // Mouse repulsion
      this.brightness = (1 - distance / mouseRadius) * 0.8;
      this.size = this.originalSize + this.brightness * 2;

      const angle = Math.atan2(dy, dx);
      const pushX = Math.cos(angle) * force * 2;
      const pushY = Math.sin(angle) * force * 2;

      this.vx -= pushX;
      this.vy -= pushY;
    } else {
      this.brightness = Math.min(
        (Math.sqrt(this.vx * this.vx + this.vy * this.vy) / this.maxSpeed) * 0.5,
        0.3
      );
      this.size = this.originalSize;
    }

    // Apply scroll effect
    this.vx += scrollSpeed * 0.15;

    // Apply spring force
    this.vx += springX;
    this.vy += springY;

    // Apply velocity with strong damping to maintain grid
    this.vx *= 0.9;
    this.vy *= 0.9;

    // Limit maximum speed
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > this.maxSpeed) {
      this.vx = (this.vx / speed) * this.maxSpeed;
      this.vy = (this.vy / speed) * this.maxSpeed;
    }

    // Update position
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D, baseColor: string, theme: string, particles: Particle[]) {
    const rgb = baseColor.match(/\d+/g);
    if (!rgb) return;

    // Create gradient for glow effect
    if (this.brightness > 0) {
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);

      const glowColor =
        theme === "light"
          ? `rgba(236, 72, 153, ${this.brightness})` // Pink glow for light mode
          : `rgba(236, 72, 153, ${this.brightness})`; // Pink glow for dark mode

      gradient.addColorStop(0, glowColor);
      gradient.addColorStop(1, "rgba(236, 72, 153, 0)");

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

    // Draw connection lines to neighbors when close
    const distThreshold = 60; // Maximum distance for connection
    const minOpacity = 0.1; // Minimum opacity for the connection

    particles.forEach((other) => {
      if (other === this) return;

      const dx = other.x - this.x;
      const dy = other.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < distThreshold) {
        const opacity = Math.max(minOpacity, 1 - dist / distThreshold);
        ctx.strokeStyle =
          theme === "light"
            ? `rgba(75, 85, 99, ${opacity * 0.2})`
            : `rgba(236, 72, 153, ${opacity * 0.15})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    });
  }
}

const ParticleGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const animationFrameRef = useRef<number>();
  const lastScrollY = useRef(0);
  const scrollSpeed = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      const spacing = 50; // Grid spacing
      const size = 1.5;

      // Create particles in a perfect grid
      for (let y = spacing; y < canvas.height - spacing; y += spacing) {
        for (let x = spacing; x < canvas.width - spacing; x += spacing) {
          particlesRef.current.push(new Particle(x, y, size));
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotColor =
        theme === "light"
          ? "rgba(75, 85, 99, 0.2)" // gray-600 with 20% opacity for light mode
          : "rgba(236, 72, 153, 0.15)"; // pink-500 with 15% opacity for dark mode

      particlesRef.current.forEach((particle) => {
        particle.update(
          mouseRef.current.x,
          mouseRef.current.y,
          mouseRef.current.radius,
          scrollSpeed.current
        );
        particle.draw(ctx, dotColor, theme || "dark", particlesRef.current);
      });

      // Decay scroll speed
      scrollSpeed.current *= 0.95;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeed.current = (currentScrollY - lastScrollY.current) * 0.1;
      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 pointer-events-none z-0'
      style={{ opacity: 1 }}
    />
  );
};

export default ParticleGrid;
