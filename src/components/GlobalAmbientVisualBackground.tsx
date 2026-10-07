import React, { useEffect, useRef } from 'react';

interface TechNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  symbol?: string;
}

interface FloatingTechToken {
  x: number;
  y: number;
  vy: number;
  text: string;
  color: string;
  alpha: number;
}

export const GlobalAmbientVisualBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Mouse coordinates with spring-interpolated lerp
    let mouse = { x: -500, y: -500, targetX: -500, targetY: -500, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -500;
      mouse.targetY = -500;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    if (!isMobile && !prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // 1. Constellation Nodes (Calm, light-mode palette: royal blue, sky, emerald mint)
    const nodeCount = isMobile ? 12 : Math.min(Math.floor(width / 55), 24);
    const nodes: TechNode[] = [];
    const colors = ['#2563eb', '#0284c7', '#059669', '#10b981', '#1d4ed8'];
    const nodeSymbols = ['</>', '{}', 'API', '200', '=>', '⚡', 'n8n', 'UI'];

    for (let i = 0; i < nodeCount; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      nodes.push({
        x: rx,
        y: ry,
        baseX: rx,
        baseY: ry,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.6 + 0.9,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.18 + 0.08,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.01,
        symbol: i % 3 === 0 ? nodeSymbols[Math.floor(Math.random() * nodeSymbols.length)] : undefined,
      });
    }

    // 2. Development Tokens (Abstract programming syntax, ultra-faint & elegant)
    const tokenStrings = [
      'const', 'async', 'function', 'return', 'API', '<Component />',
      '{ data }', 'useState()', 'await n8n.trigger()', 'Promise.all()',
      'Figma: 1440px', 'status: 200 OK', 'Tailwind @layer', 'OAuth 2.0',
    ];

    const tokens: FloatingTechToken[] = tokenStrings.map((txt, index) => ({
      text: txt,
      x: (width / tokenStrings.length) * index + (Math.random() * 40 - 20),
      y: Math.random() * height,
      vy: -0.12 - Math.random() * 0.14,
      color: index % 2 === 0 ? '#2563eb' : '#059669',
      alpha: 0.07 + Math.random() * 0.06,
    }));

    // If reduced motion, draw once and exit
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.alpha * 0.5;
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Subtle cursor ambient spotlight
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        glow.addColorStop(0, 'rgba(37, 99, 235, 0.045)');
        glow.addColorStop(0.5, 'rgba(5, 150, 105, 0.025)');
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(mouse.x - 220, mouse.y - 220, 440, 440);
      }

      // 2. Constellation Lines
      const maxDistance = 110;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const edgeAlpha = (1 - dist / maxDistance) * 0.07;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${edgeAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // 3. Constellation Nodes with subtle mouse displacement
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Free drift
        node.baseX += node.vx;
        node.baseY += node.vy;

        if (node.baseX < 0) node.baseX = width;
        if (node.baseX > width) node.baseX = 0;
        if (node.baseY < 0) node.baseY = height;
        if (node.baseY > height) node.baseY = 0;

        // Mouse displacement physics (max 14px displacement within 100px radius)
        let targetX = node.baseX;
        let targetY = node.baseY;

        if (mouse.active) {
          const mdx = node.baseX - mouse.x;
          const mdy = node.baseY - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 100 && mDist > 0) {
            const force = (1 - mDist / 100) * 14;
            targetX += (mdx / mDist) * force;
            targetY += (mdy / mDist) * force;
          }
        }

        node.x += (targetX - node.x) * 0.1;
        node.y += (targetY - node.y) * 0.1;

        node.pulsePhase += node.pulseSpeed;
        const currentAlpha = node.alpha * (0.85 + 0.25 * Math.sin(node.pulsePhase));

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        // Node symbol
        if (node.symbol && !isMobile) {
          ctx.font = '9px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
          ctx.fillStyle = '#64748b';
          ctx.globalAlpha = currentAlpha * 0.75;
          ctx.fillText(node.symbol, node.x + 5, node.y - 4);
        }
      }

      // 4. Floating Dev Code Tokens
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        token.y += token.vy;

        if (token.y < -30) {
          token.y = height + 20;
          token.x = Math.random() * width;
        }

        ctx.font = '9.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
        ctx.fillStyle = token.color;
        ctx.globalAlpha = token.alpha;
        ctx.fillText(token.text, token.x, token.y);
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Light subtle blueprint grid overlay in brand derivative */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
