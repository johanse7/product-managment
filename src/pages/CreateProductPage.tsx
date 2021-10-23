import ProductForm from "../components/ProductForm"
import { IProduct } from "../interfaces/IProduct"
import { useRecoilState } from "recoil"
import { productsAtom } from "../context/Product/Atoms/ProductsAtom"
import { useEffect } from "react"
import { STORAGE_PRODUCTS } from "../helpers/Const"

const CreateProductPage = () => {
  const [products, setProduct] = useRecoilState(productsAtom)

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(products))
    }
  }, [products])

  const handleClickSaveProduct = (product: IProduct) => {
    setProduct((prevProds) => [...prevProds, product])
  }

  return (
    <>
      <h2 className="m-top-button1">Create product</h2>
      <ProductForm onClickSaveProduct={handleClickSaveProduct} />
    </>
  )
}

export default CreateProductPage
