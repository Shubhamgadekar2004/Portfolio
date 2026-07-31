// src/components/CyberGridCanvas.jsx
import { useEffect, useRef } from 'react';

const CyberGridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    let particles = [];
    const particleCount = 40;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? 'cyan' : 'purple';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      time += 0.002;

      // Clear with deep black + slight trail
      ctx.fillStyle = 'rgba(3, 7, 18, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── Perspective Grid ──
      const gridSpacing = 80;
      const gridAlpha = 0.04 + Math.sin(time * 2) * 0.01;
      ctx.strokeStyle = `rgba(34, 211, 238, ${gridAlpha})`;
      ctx.lineWidth = 0.5;

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // ── Particles ──
      particles.forEach((p, i) => {
        p.update();

        const alpha = 0.4 + Math.sin(time * 3 + i) * 0.2;
        if (p.color === 'cyan') {
          ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = p.color === 'cyan'
              ? `rgba(34, 211, 238, ${lineAlpha})`
              : `rgba(168, 85, 247, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // ── Floating Hexagons ──
      for (let i = 0; i < 3; i++) {
        const cx = canvas.width * (0.2 + i * 0.3) + Math.sin(time + i * 2) * 40;
        const cy = canvas.height * (0.3 + Math.sin(time * 0.5 + i) * 0.15);
        const size = 20 + Math.sin(time + i) * 5;
        const hexAlpha = 0.03 + Math.sin(time * 2 + i) * 0.015;

        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = (j / 6) * Math.PI * 2 - Math.PI / 6 + time * 0.1;
          const hx = cx + Math.cos(angle) * size;
          const hy = cy + Math.sin(angle) * size;
          if (j === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.strokeStyle = i % 2 === 0
          ? `rgba(34, 211, 238, ${hexAlpha * 3})`
          : `rgba(168, 85, 247, ${hexAlpha * 3})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.6, zIndex: 0 }}
    />
  );
};

export default CyberGridCanvas;
