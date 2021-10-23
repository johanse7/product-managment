import { useRecoilValue } from "recoil"
import ProductList from "../components/ProductList"
import { productsAtom } from "../context/Product/Atoms/ProductsAtom"

const ProductListPage = () => {
  const products = useRecoilValue(productsAtom)

  return (
    <>
      <h2 className="m-top-button1">Product list</h2>
      <ProductList products={products} />
    </>
  )
}

export default ProductListPage
