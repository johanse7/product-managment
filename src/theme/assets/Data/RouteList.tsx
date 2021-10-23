import { IRouteComponent } from "../../../interfaces/IRouteComponent"
import CreateProductPage from "../../../pages/CreateProductPage"
import DashboardPage from "../../../pages/DashboardPage"
import ProductDetailPage from "../../../pages/ProductDetailPage"
import ProductListPage from "../../../pages/ProductListPage"

export const routeList: Array<IRouteComponent> = [
  {
    path: ["/", "dasboard"],
    exact: true,
    name: "DasboardPage",
    component: DashboardPage,
  },
  {
    path: "/create",
    exact: true,
    name: "CreateProductPage",
    component: CreateProductPage,
  },
  {
    path: "/products",
    exact: true,
    name: "ProductListPage",
    component: ProductListPage,
  },
  {
    path: "/product/:id",
    exact: true,
    name: "ProductDetailPage",
    component: ProductDetailPage,
  },
]
