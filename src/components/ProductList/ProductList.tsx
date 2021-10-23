import { IProductList } from "../../interfaces/IProductList"
import { GridContainer } from "../../theme/common/Grid.styled"
import Product from "./Product"

const ProductList = ({ products }: IProductList) => {
  return (
    <GridContainer minSize={"100%"}>
      {products.length > 0 ? (
        products.map(({ id, name, price }) => (
          <Product key={id} name={name} id={id} price={price} />
        ))
      ) : (
        <h3 className="text-center">No Results!!</h3>
      )}
    </GridContainer>
  )
}

export default ProductList
