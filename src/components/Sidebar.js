import "../assets/styles/Sidebar.scss"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faIcons, faGaugeHigh, faMicrochip, faTriangleExclamation, faGear } from "@fortawesome/free-solid-svg-icons"

function Sidebar() {

  library.add(faIcons)
  
  return(
    <div className="sideBar">
      <NavLink to={"/"} className={"links"}>
        <FontAwesomeIcon icon={faGaugeHigh} className=".linksIcon"/>
        <p className="linksTitle">Dashboard</p>
      </NavLink>
      <NavLink to={"/devices"} className={"links"}>
        <FontAwesomeIcon icon={faMicrochip} className=".linksIcon"/>
        <p className="linksTitle">Device report</p>
      </NavLink>
      <NavLink to={"/interuptions"} className={"links"}>
        <FontAwesomeIcon icon={faTriangleExclamation} className=".linksIcon"/>
        <p className="linksTitle">Interuption report</p>
      </NavLink>
      <NavLink to={"/settings"} className={"links"}>
        <FontAwesomeIcon icon={faGear} className=".linksIcon"/>
        <p className="linksTitle">Settings</p>
      </NavLink>
    </div>
  )
}

export default Sidebar