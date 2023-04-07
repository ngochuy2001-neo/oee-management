import { NavLink } from "react-router-dom"
import "../assets/styles/Sidebar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine, faClipboard, faTriangleExclamation, faGear } from "@fortawesome/free-solid-svg-icons"

function Sidebar(){
  return (
    <div className="Sidebar">
      <NavLink to={"/"} className={"sidebarLink"}>
        <FontAwesomeIcon className="iconLink" icon={faChartLine} />
        <p className="titleLink">Dashboard</p>
      </NavLink>
      <NavLink to={"/map"} className="sidebarLink">
        <FontAwesomeIcon className="iconLink" icon={faChartLine} />
        <p className="titleLink">Maps</p>
      </NavLink>
      <NavLink to={"/report"} className={"sidebarLink"}>
        <FontAwesomeIcon className="iconLink" icon={faClipboard} />
        <p className="titleLink">Report</p>
      </NavLink>
      <NavLink to={"/interuption"} className={"sidebarLink"}>
        <FontAwesomeIcon className="iconLink" icon={faTriangleExclamation} />
        <p className="titleLink">Interuption</p>
      </NavLink>
      <NavLink to={"/settings"} className={"sidebarLink"}>
        <FontAwesomeIcon className="iconLink" icon={faGear} />
        <p className="titleLink">Settings</p>
      </NavLink>
    </div>
  )
}

export default Sidebar