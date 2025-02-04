import { FC, ReactNode } from "react";

import DesktopLayout from "./DesktopLayout";

interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<IPageLayoutProps> = ({ children }) => {
  return <DesktopLayout>{children}</DesktopLayout>;
};

export default PageLayout;
