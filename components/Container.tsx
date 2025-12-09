import { ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function ContainerComponent({ children, className = "" }: Props) {
  return (
    <div
      className={`container px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

const Container = memo(ContainerComponent);
export default Container;
