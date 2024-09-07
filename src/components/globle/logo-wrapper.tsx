import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

const LogoWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-[150px] md:w-[160px] lg:w-[180px]  xl:w-[200px] lg:h-[50px] md:h-[40px] h-[30px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeaderLogo = () => {
  return (
    <>
      <Image src="/logo.png" fill className="object-cover" alt="logo" />
    </>
  );
};

export default LogoWrapper;
