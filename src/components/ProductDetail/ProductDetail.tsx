import { IProductDetail } from "../../interfaces/IProduct"
import { DescriptionStyled, ProductDetailStyled, TitleDescription } from "./ProductDetail.styeld"

const ProductDetail = ({ description, name, price }: IProductDetail) => {
  return (
    <ProductDetailStyled>
      <span className="title-product">{name}</span>
      <span className="content-price ">$ {price.toLocaleString()}</span>
      <TitleDescription>Product description</TitleDescription>
      <DescriptionStyled>{description}</DescriptionStyled>
    </ProductDetailStyled>
  )
}

export default ProductDetail
