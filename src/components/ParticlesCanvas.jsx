// src/components/ParticlesCanvas.jsx
import { useEffect, useRef } from 'react';

const ParticlesCanvas = ({ particleCount = 20, particleColor = 'rgba(59, 130, 246, 0.5)' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let frameCount = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      frameCount++;
      
      // Fast fade background
      ctx.fillStyle = 'rgba(10, 15, 35, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p1, idx) => {
        p1.update();
        
        // Alternate cyan and magenta
        const color = idx % 2 === 0 ? 'rgba(0, 255, 200, 0.6)' : 'rgba(255, 0, 255, 0.6)';
        
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Draw connections every 2 frames for better performance
      if (frameCount % 2 === 0) {
        particles.forEach((p1, i) => {
          particles.slice(i + 1).forEach((p2) => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 80) {
              const color = i % 2 === 0 ? 'rgba(0, 255, 200, 0.2)' : 'rgba(255, 0, 255, 0.2)';
              ctx.beginPath();
              ctx.strokeStyle = color;
              ctx.lineWidth = 0.6;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          });
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none top-0 left-0 w-full h-full"
      style={{ opacity: 0.6, position: 'absolute' }}
    />
  );
};

export default ParticlesCanvas;

