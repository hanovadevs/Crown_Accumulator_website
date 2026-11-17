interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", className }: CounterProps) {
  return <span className={className}>{prefix}{value.toLocaleString("en-US")}{suffix}</span>;
}
