import { useState } from "react"
import { MenuList } from "../../../theme/assets/Data/MenuList"
import { IconClose, IconMenu, IconProduct } from "../../../theme/common/Icons.styled"
import { LinkBase } from "../../../theme/common/Link.styled"
import { NavBarStyled } from "./Menu.styled"

const Menu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const handleClickOpenMenu = () => setOpenMenu(!openMenu)

  const handleClikOptionMenu = () => {
    setOpenMenu(false)
  }
  return (
    <NavBarStyled open={openMenu}>
      <LinkBase className="logo" to="/">
        <IconProduct />
        <span>Product Management</span>
      </LinkBase>

      <button className="open-menu" onClick={handleClickOpenMenu}>
        <IconMenu />
      </button>
      <ul className="menu">
        <button className="close-menu" onClick={handleClickOpenMenu}>
          <IconClose />
        </button>
        {MenuList.map(({ label, path, Icon }, index) => (
          <li key={`${path}-${index}`}>
            <LinkBase to={path} onClick={handleClikOptionMenu}>
              {Icon ? Icon : null}
              <span>{label}</span>
            </LinkBase>
          </li>
        ))}
      </ul>
    </NavBarStyled>
  )
}

export default Menu
