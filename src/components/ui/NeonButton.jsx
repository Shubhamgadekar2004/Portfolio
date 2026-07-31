// src/components/ui/NeonButton.jsx
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

const NeonButton = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon,
  ...props
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 300 });
  const springY = useSpring(y, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass = variant === 'primary' ? 'btn-neon btn-neon-primary' : 'btn-neon btn-neon-secondary';

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      className={`${baseClass} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      href={href}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      {...(href ? { target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {})}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </Component>
  );
};

export default NeonButton;
