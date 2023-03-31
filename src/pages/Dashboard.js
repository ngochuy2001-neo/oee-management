import "../assets/styles/Dashboard.scss"
import DetailOEE from "../components/DetailOEE"
import TotalOEE from "../components/TotalOEE"
function Dashboard(){
  return(
    <div className="Dashboard">
      <div className="deviceOEE">
        <DetailOEE />
      </div>
      <TotalOEE />
    </div> 
  )
}

export default Dashboard