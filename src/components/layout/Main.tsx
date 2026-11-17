import type { ReactNode } from "react";

export function Main({ children }: { children: ReactNode }) {
  return <main id="main-content" className="site-main">{children}</main>;
}
