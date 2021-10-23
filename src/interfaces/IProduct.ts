export interface IProduct {
  id: string
  name: string
  price: number
  description: string
}
export interface IProductItem extends Omit<IProduct, "description"> {}

export interface IProductDetail extends Omit<IProduct, "id"> {}
