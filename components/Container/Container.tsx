import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return <div className={cn("my-0", className)}>{children}</div>;
};

export default Container;
