import { IProduct } from "./IProduct"

export interface IProductForm {
  onClickSaveProduct: (product: IProduct) => void
}
