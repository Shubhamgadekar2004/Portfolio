// src/components/BinaryCanvas.jsx
import { useEffect, useRef } from 'react';

const BinaryCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let columns = [];
    let fontSize = 16;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      fontSize = Math.max(12, Math.min(16, canvas.width / 100));
      columns = Array(Math.ceil(canvas.width / fontSize)).fill(0);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const binary = '01';
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      
      // Only update every 2 frames for better performance
      if (frameCount % 2 === 0) {
        // Fade background
        ctx.fillStyle = 'rgba(10, 15, 35, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw binary characters
        for (let i = 0; i < columns.length; i++) {
          const x = i * fontSize;
          const y = columns[i] * fontSize;

          // Cyan for active characters
          ctx.fillStyle = `rgba(0, 255, 200, ${0.3 + Math.random() * 0.3})`;
          ctx.font = `${fontSize}px monospace`;
          ctx.fillText(binary[Math.floor(Math.random() * 2)], x, y);

          // Reset column when it goes off screen
          if (y > canvas.height && Math.random() > 0.95) {
            columns[i] = 0;
          } else {
            columns[i]++;
          }
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
      style={{ position: 'absolute', opacity: 0.3 }}
    />
  );
};

export default BinaryCanvas;
