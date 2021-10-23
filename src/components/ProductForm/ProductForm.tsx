import { IProduct } from "../../interfaces/IProduct"
import { IProductForm } from "../../interfaces/IProductForm"
import { ButtonStyled } from "../../theme/common/Button.styled"
import { IconSave } from "../../theme/common/Icons.styled"
import TextArea from "../../theme/common/TextArea.styled"
import Input from "../Common/Input"
import { InputContainerStyled } from "../Common/Input/Input.styled"
import ProductFormStyled from "./ProductForm.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import { shemaProductForm } from "../../helpers/shemas/ShemaProducForm"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"
import { useEffect, useState } from "react"
import { AlertStyled } from "../../theme/common/Alert.styled"

const ProductForm = ({ onClickSaveProduct }: IProductForm) => {
  const [savedProduct, setsavedProduct] = useState<boolean>(false)

  useEffect(() => {
    let timerAlert: NodeJS.Timeout

    if (savedProduct) {
      timerAlert = setTimeout(() => {
        setsavedProduct(false)
      }, 3000)
    }

    return () => clearTimeout(timerAlert)
  }, [savedProduct])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProduct>({
    resolver: yupResolver(shemaProductForm),
  })

  const onSubmit = (product: IProduct) => {
    onClickSaveProduct({
      ...product,
      id: v4(),
    })
    setsavedProduct(true)
    reset()
  }

  return (
    <>
      {savedProduct && (
        <AlertStyled variant="success">
          <p>Product Saved Successfully</p>
        </AlertStyled>
      )}

      <ProductFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" label="Product name" id="name" {...register("name")} />
        {errors?.name && <span className="error-message">{errors.name.message}</span>}
        <Input type="number" label="Price" id="price" {...register("price")} />
        {errors?.price && <span className="error-message">{errors.price.message}</span>}
        <InputContainerStyled>
          <label htmlFor="description">Description</label>
          <TextArea className="input" id="description" {...register("description")} />
        </InputContainerStyled>
        {errors?.description && <span className="error-message">{errors.description.message}</span>}

        <ButtonStyled variant="primary">
          <IconSave />
          <span>SAVE</span>
        </ButtonStyled>
      </ProductFormStyled>
    </>
  )
}

export default ProductForm
