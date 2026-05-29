import { useEffect, useRef, useState } from 'react';
import './ShapeGrid.css';

interface ShapeGridProps {
  borderColor?: string;
  hoverFillColor?: string;
  speed?: number;
}

export default function ShapeGrid({ 
  borderColor = '#2f00d8ff', 
  hoverFillColor = '#08004eff',
  speed = 0.3 
}: ShapeGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredCell, setHoveredCell] = useState<{ x: number; y: number } | null>(null);
  const cellSizeRef = useRef(80);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / cellSizeRef.current);
      const y = Math.floor((e.clientY - rect.top) / cellSizeRef.current);
      setHoveredCell({ x, y });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / cellSizeRef.current);
      const rows = Math.ceil(canvas.height / cellSizeRef.current);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSizeRef.current;
          const y = j * cellSizeRef.current;

          // Calculate distance from hovered cell
          let distance = Infinity;
          if (hoveredCell) {
            distance = Math.hypot(i - hoveredCell.x, j - hoveredCell.y);
          }

          // Animation based on hover distance
          const isNearHovered = distance < 3;
          const opacity = isNearHovered ? 0.8 : 0.2;

          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1;
          ctx.globalAlpha = opacity;
          ctx.strokeRect(x, y, cellSizeRef.current, cellSizeRef.current);

          // Fill cells near hover
          if (isNearHovered) {
            ctx.fillStyle = hoverFillColor;
            ctx.globalAlpha = 0.3;
            ctx.fillRect(x + 1, y + 1, cellSizeRef.current - 2, cellSizeRef.current - 2);
          }

          ctx.globalAlpha = 1;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [borderColor, hoverFillColor]);

  return <canvas ref={canvasRef} className="shapegrid-canvas" />;
}
