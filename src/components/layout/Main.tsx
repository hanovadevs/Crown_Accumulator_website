"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Main({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === "/";
  return (
    <main className={cn("flex-1 w-full", !isHome && "pt-20 sm:pt-24")}>
      {children}
    </main>
  );
}
