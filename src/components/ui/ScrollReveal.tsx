import type { HTMLAttributes, ReactNode } from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal(props: ScrollRevealProps) {
  const { children, className, id } = props;
  return <div className={className} id={id}>{children}</div>;
}
