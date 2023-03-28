import "../assets/styles/Dashboard.scss"
import GeneralOEE from "../components/GeneralOEE"
import DetailOEE from "../components/DetailOEE"

function Dashboard(){
  return(
    <div className="Dashboard">
      <GeneralOEE />
      <DetailOEE />
    </div>
  )
}

export default Dashboard