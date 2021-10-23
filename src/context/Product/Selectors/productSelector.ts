import { selector, selectorFamily } from "recoil"
import { productsAtom } from "../Atoms/ProductsAtom"

export const countProductsSelector = selector({
  key: "countProducts",
  get: ({ get }) => get(productsAtom).length,
})

export const productByIdSelector = selectorFamily({
  key: "productByIdSelector",
  get:
    (productId: string) =>
    ({ get }) =>
      get(productsAtom).find(({ id }) => id === productId),
})
