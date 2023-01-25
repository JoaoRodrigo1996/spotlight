import Link from "next/link";
import { ReactNode } from "react";

interface IconProps {
  href: string;
  children: ReactNode;
}

export function Icon({ href, children }: IconProps) {
  return <Link href={href}>{children}</Link>;
}
