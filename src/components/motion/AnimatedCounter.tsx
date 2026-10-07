import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number; // duration in seconds
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.6,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // If not in view yet, show start baseline or final if SSR
    return typeof value === 'number' ? '0' : String(value);
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(String(value));
      return;
    }

    if (!isInView) return;

    const str = String(value).trim();

    // Pattern 1: Percentage with optional trailing text, e.g. "100%", "+48%", "-65% рутины", "+42% higher LTV"
    const percentMatch = str.match(/^([+-]?)(\d+)(%)(.*)$/);
    if (percentMatch) {
      const prefix = percentMatch[1];
      const targetNum = parseInt(percentMatch[2], 10);
      const percentSign = percentMatch[3];
      const suffix = percentMatch[4];
      animateNumber(0, targetNum, duration, (n) => {
        setDisplayValue(`${prefix}${Math.round(n)}${percentSign}${suffix}`);
      });
      return;
    }

    // Pattern 2: Multiplier with optional trailing text, e.g. "x2.4", "x3.4", "x2.4 рост конверсии"
    const multMatch = str.match(/^([xX])(\d+(?:\.\d+)?)(.*)$/);
    if (multMatch) {
      const prefix = multMatch[1];
      const targetNum = parseFloat(multMatch[2]);
      const suffix = multMatch[3];
      animateNumber(1.0, targetNum, duration, (n) => {
        setDisplayValue(`${prefix}${n.toFixed(1)}${suffix}`);
      });
      return;
    }

    // Pattern 3: Range with unit, e.g. "15–30 мин" or "7–14 дней"
    const rangeMatch = str.match(/^(\d+)[–-](\d+)\s*(.*)$/);
    if (rangeMatch) {
      const minTarget = parseInt(rangeMatch[1], 10);
      const maxTarget = parseInt(rangeMatch[2], 10);
      const unit = rangeMatch[3];
      animateNumber(0, 1, duration, (progress) => {
        const curMin = Math.round(minTarget * progress);
        const curMax = Math.round(maxTarget * progress);
        setDisplayValue(`${curMin}–${curMax}${unit ? ' ' + unit : ''}`);
      });
      return;
    }

    // Pattern 4: Pure integer number with optional prefix and suffix, e.g. "15 ч/нед", "+38%", "-10s"
    const singleNumMatch = str.match(/^([+-]?)(\d+)(.*)$/);
    if (singleNumMatch) {
      const prefix = singleNumMatch[1];
      const targetNum = parseInt(singleNumMatch[2], 10);
      const suffix = singleNumMatch[3];
      animateNumber(0, targetNum, duration, (n) => {
        setDisplayValue(`${prefix}${Math.round(n)}${suffix}`);
      });
      return;
    }

    // Fallback: standard string
    setDisplayValue(str);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

// Easing function: standard cubic bezier easeOutExpo
function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function animateNumber(
  start: number,
  end: number,
  durationSeconds: number,
  onUpdate: (current: number) => void
) {
  const startTime = performance.now();
  const durationMs = durationSeconds * 1000;

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(1, elapsed / durationMs);
    const easedProgress = easeOutExpo(progress);
    const current = start + (end - start) * easedProgress;

    onUpdate(current);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onUpdate(end);
    }
  };

  requestAnimationFrame(step);
}
