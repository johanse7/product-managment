import { IProductItem } from "../../../interfaces/IProduct"
import ProductCardStyled from "./Product.styled"

const Product = ({ id, name, price }: IProductItem) => {
  return (
    <ProductCardStyled to={`/product/${id}`}>
      <span>{name}</span>
      <span className="content-price">$ {price.toLocaleString()} </span>
    </ProductCardStyled>
  )
}

export default Product
