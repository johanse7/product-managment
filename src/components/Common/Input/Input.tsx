import { forwardRef } from "react"
import { InputProps } from "../../../types/IHtmlPropsType"
import { InputContainerStyled } from "./Input.styled"

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputContainerStyled>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      {<input {...props} className="input" ref={ref} />}
    </InputContainerStyled>
  )
})

export default Input
