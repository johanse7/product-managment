import * as Yup from "yup"

export const shemaProductForm = Yup.object({
  name: Yup.string().required("Name is required"),
  price: Yup.number().required().typeError("Price is required"),
  description: Yup.string().required("Description is required"),
})
