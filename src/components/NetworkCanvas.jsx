// src/components/NetworkCanvas.jsx
import { useEffect, useRef } from 'react';

const NetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    const gridSize = 100;
    let bgGradient = null;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      
      // Create gradient background once
      if (!bgGradient) {
        bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        bgGradient.addColorStop(0, 'rgba(10, 15, 35, 0.6)');
        bgGradient.addColorStop(0.5, 'rgba(15, 10, 35, 0.6)');
        bgGradient.addColorStop(1, 'rgba(10, 15, 35, 0.6)');
      }
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.003;

      // Sparse cyber grid with neon cyan
      ctx.strokeStyle = `rgba(0, 255, 200, ${0.15 + Math.sin(time) * 0.05})`;
      ctx.lineWidth = 0.6;

      // Vertical lines only
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines only
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;

      // Animated neon nodes - reduced from 8 to 6, update every 2 frames
      if (frameCount % 2 === 0) {
        const nodes = 6;
        for (let i = 0; i < nodes; i++) {
          const angle = (i / nodes) * Math.PI * 2 + time * 0.2;
          const radius = 100 + Math.sin(time + i) * 30;
          const x = canvas.width / 2 + Math.cos(angle) * radius;
          const y = canvas.height / 2 + Math.sin(angle) * radius;

          // Alternate neon colors: cyan and magenta
          const color = i % 2 === 0 ? 'rgba(0, 255, 200, 0.7)' : 'rgba(255, 0, 255, 0.7)';
          const glowColor = i % 2 === 0 ? 'rgba(0, 255, 200, 0.3)' : 'rgba(255, 0, 255, 0.3)';

          // Simple glow
          ctx.fillStyle = glowColor;
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();

          // Bright core
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();

          // Simple connection line
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2, canvas.height / 2);
          ctx.lineTo(x, y);
          ctx.strokeStyle = glowColor;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
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
      className="absolute inset-0 pointer-events-none top-0 left-0 w-full h-full"
      style={{ opacity: 0.4, position: 'absolute' }}
    />
  );
};

export default NetworkCanvas;
