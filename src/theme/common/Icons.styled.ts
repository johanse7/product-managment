import styled from "styled-components"
import { GrProductHunt } from "react-icons/gr"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { IoAddCircleOutline } from "react-icons/io5"
import { BsCardChecklist } from "react-icons/bs"
import { VscSaveAs } from "react-icons/vsc"
import { MdDashboard } from "react-icons/md"
import { BiArrowBack } from "react-icons/bi"

export const IconProduct = styled(GrProductHunt)`
  font-size: 2.5rem;
`

export const IconMenu = styled(FiMenu)`
  font-size: 2.5rem;
`
export const IconClose = styled(AiOutlineClose)`
  font-size: 2.5rem;
`
export const IconPlus = styled(IoAddCircleOutline)`
  font-size: 1.5rem;
`

export const IconList = styled(BsCardChecklist)`
  font-size: 1.5rem;
`
export const IconSave = styled(VscSaveAs)`
  font-size: 2.5rem;
`
export const IconDasboard = styled(MdDashboard)`
  font-size: 1.5rem;
`
export const IconBack = styled(BiArrowBack)`
  font-size: 2.5rem;
  cursor: pointer;
`
