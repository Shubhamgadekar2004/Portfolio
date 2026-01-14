// src/components/WaveCanvas.jsx
import { useEffect, useRef } from 'react';

const WaveCanvas = ({ color = 'rgba(59, 130, 246, 0.3)' }) => {
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
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      
      // Fast fade background
      ctx.fillStyle = 'rgba(10, 15, 35, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.006;

      // Draw 2 neon waves only every 2 frames
      if (frameCount % 2 === 0) {
        const colors = ['rgba(0, 255, 200, 0.5)', 'rgba(255, 0, 255, 0.5)'];
        
        for (let i = 0; i < 2; i++) {
          ctx.beginPath();
          ctx.moveTo(0, canvas.height / 2 + (i - 0.5) * 50);

          for (let x = 0; x < canvas.width; x += 3) {
            const y = canvas.height / 2 + (i - 0.5) * 50 +
                     Math.sin(x * 0.006 + time) * 15;
            ctx.lineTo(x, y);
          }

          ctx.strokeStyle = colors[i];
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none top-0 left-0 w-full h-full"
      style={{ position: 'absolute' }}
    />
  );
};

export default WaveCanvas;
