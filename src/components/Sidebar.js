import { NavLink } from "react-router-dom"
import "../assets/styles/Sidebar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine, faClipboard, faTriangleExclamation, faGear, faMap } from "@fortawesome/free-solid-svg-icons"

function Sidebar(){
  return (
    <div className="Sidebar">
      <div className="sidebarHeader">
        <p>OEE Management</p>
      </div>
      <div className="sidebarGroup">
        <NavLink to={"/"} className={"sidebarLink"}>
          <FontAwesomeIcon className="iconLink" icon={faChartLine} />
          <p className="titleLink">Dashboard</p>
        </NavLink>
        {/* <NavLink to={"/map"} className="sidebarLink">
          <FontAwesomeIcon className="iconLink" icon={faMap} />
          <p className="titleLink">Location</p>
        </NavLink> */}
      </div>
      <div className="sidebarGroup">
        <NavLink to={"/devices"} className={"sidebarLink"}>
          <FontAwesomeIcon className="iconLink" icon={faClipboard} />
          <p className="titleLink">Report</p>
        </NavLink>
        <NavLink to={"/interuptions"} className={"sidebarLink"}>
          <FontAwesomeIcon className="iconLink" icon={faTriangleExclamation} />
          <p className="titleLink">Interuption</p>
        </NavLink>
      </div>
      <div className="sidebarGroup">
        <NavLink to={"/settings"} className={"sidebarLink"}>
          <FontAwesomeIcon className="iconLink" icon={faGear} />
          <p className="titleLink">Settings</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar