import { createBrowserRouter } from "react-router";
import { Root } from "@/app/components/root";
import { LandingPage } from "@/app/pages/landing-page";
import { ProductManagementPage } from "@/app/pages/product-management";
import { ProjectManagementPage } from "@/app/pages/project-management";
import { SoftwareDevelopmentPage } from "@/app/pages/software-development";
import { LogisticsOperationsPage } from "@/app/pages/logistics-operations";
import { DataAnalystPage } from "@/app/pages/data-analyst";
import { NotFoundPage } from "@/app/pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "product-management", Component: ProductManagementPage },
      { path: "project-management", Component: ProjectManagementPage },
      { path: "software-development", Component: SoftwareDevelopmentPage },
      { path: "logistics-operations", Component: LogisticsOperationsPage },
      { path: "data-analyst", Component: DataAnalystPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
