import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full h-screen max-w-[1728px]", // macbook pro 16 inch port width in chrome
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
