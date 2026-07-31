// src/components/ui/GlassCard.jsx
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const GlassCard = ({
  children,
  className = '',
  accentColor = 'cyan',
  hover3D = true,
  glowOnHover = true,
  neonBorder = false,
  onClick,
  ...props
}) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), { damping: 30, stiffness: 200 });

  const accentColors = {
    cyan: {
      border: 'rgba(34, 211, 238, 0.2)',
      glow: 'rgba(34, 211, 238, 0.08)',
      shadow: 'rgba(34, 211, 238, 0.15)',
    },
    purple: {
      border: 'rgba(168, 85, 247, 0.2)',
      glow: 'rgba(168, 85, 247, 0.08)',
      shadow: 'rgba(168, 85, 247, 0.15)',
    },
    emerald: {
      border: 'rgba(16, 185, 129, 0.2)',
      glow: 'rgba(16, 185, 129, 0.08)',
      shadow: 'rgba(16, 185, 129, 0.15)',
    },
    blue: {
      border: 'rgba(59, 130, 246, 0.2)',
      glow: 'rgba(59, 130, 246, 0.08)',
      shadow: 'rgba(59, 130, 246, 0.15)',
    },
    pink: {
      border: 'rgba(236, 72, 153, 0.2)',
      glow: 'rgba(236, 72, 153, 0.08)',
      shadow: 'rgba(236, 72, 153, 0.15)',
    },
  };

  const colors = accentColors[accentColor] || accentColors.cyan;

  const handleMouseMove = (e) => {
    if (!ref.current || !hover3D) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`glass-card ${neonBorder ? `neon-border-${accentColor}` : ''} ${className}`}
      style={hover3D ? {
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={glowOnHover ? {
        borderColor: colors.border,
        boxShadow: `0 0 20px ${colors.glow}, 0 25px 50px rgba(0,0,0,0.4)`,
      } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
