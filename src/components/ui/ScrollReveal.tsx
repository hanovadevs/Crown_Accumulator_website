"use client";

import { useRef, useState, useEffect } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.6,
  once = true,
  className,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [forceVisible, setForceVisible] = useState(false);

  // Fallback: if whileInView never fires (e.g. IntersectionObserver issue),
  // force content visible after 1.5s so the page is never blank.
  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      {...(forceVisible
        ? {
            animate: { opacity: 1, x: 0, y: 0 },
          }
        : {
            whileInView: { opacity: 1, x: 0, y: 0 },
          })}
      viewport={{ once, amount: 0, margin: "-20px" }}
      transition={{
        duration,
        delay: forceVisible ? Math.min(delay, 0.2) : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

