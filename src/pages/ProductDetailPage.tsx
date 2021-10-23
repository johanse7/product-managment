import { useHistory, useParams } from "react-router"
import { useRecoilValue } from "recoil"
import ProductDetail from "../components/ProductDetail"
import { productByIdSelector } from "../context/Product/Selectors/productSelector"
import { IconBack } from "../theme/common/Icons.styled"

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()

  const product = useRecoilValue(productByIdSelector(id))
  return (
    <>
      <IconBack onClick={() => history.goBack()} />

      <h2 className="m-top-button1">Product detail</h2>
      {product && (
        <ProductDetail
          description={product.description}
          name={product.name}
          price={product.price}
        />
      )}
    </>
  )
}

export default ProductDetailPage
