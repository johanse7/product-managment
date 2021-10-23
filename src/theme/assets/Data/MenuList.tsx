import { IMenu } from "../../../interfaces/IMenu"
import { IconDasboard, IconList, IconPlus } from "../../common/Icons.styled"

export const MenuList: Array<IMenu> = [
  {
    path: "/",
    label: "Dasboard",
    Icon: <IconDasboard />,
  },
  {
    path: "/create",
    label: "Create product",
    Icon: <IconPlus />,
  },
  {
    path: "/products",
    label: "Product list",
    Icon: <IconList />,
  },
]
