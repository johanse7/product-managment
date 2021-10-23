import { useRecoilValue } from "recoil"
import SummaryDasboard from "../components/SummaryDashBoard"
import { countProductsSelector } from "../context/Product/Selectors/productSelector"

const DashboardPage = () => {
  const counProducts = useRecoilValue(countProductsSelector)

  return (
    <>
      <h2 className="m-top-button1">Dashboard</h2>
      <SummaryDasboard countProducts={counProducts} />
    </>
  )
}
export default DashboardPage
