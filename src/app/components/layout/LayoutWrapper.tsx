import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function LayoutWrapper({ children }: Props) {
  return (
    <div className="flex items-center justify-center h-[calc(100%-100px)]">
      {children}
    </div>
  );
}
