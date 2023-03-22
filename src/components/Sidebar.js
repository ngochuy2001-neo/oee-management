import "../assets/styles/Sidebar.scss"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faIcons, faGaugeHigh } from "@fortawesome/free-solid-svg-icons"

function Sidebar() {

  library.add(faIcons)
  
  return(
    <div className="sideBar">
      <NavLink className={"links"}>
        <FontAwesomeIcon icon={faGaugeHigh} className=".linksIcon"/>
        <p className="linksTitle">Dashboard</p>
      </NavLink>
    </div>
  )
}

export default Sidebar