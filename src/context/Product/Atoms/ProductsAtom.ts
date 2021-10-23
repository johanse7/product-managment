import { atom } from "recoil"
import { STORAGE_PRODUCTS } from "../../../helpers/Const"
import { IProduct } from "../../../interfaces/IProduct"

const storageProducts = localStorage.getItem(STORAGE_PRODUCTS)

export const productsAtom = atom({
  key: "products",
  default: (storageProducts ? JSON.parse(storageProducts) : []) as Array<IProduct>,
})
