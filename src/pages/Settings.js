import { useState } from "react"
import "../assets/styles/Settings.scss"
import SettingsSideBar from "../components/SettingsSideBar"
import InteruptionsSetting from "../components/InteruptionsSettings"
import MachineSettings from "../components/MachineSettings"
import UserSettings from "../components/UserSettings"

function Settings() {

  const [activeButton, setActiveButton] = useState(0) 

  const components = [<MachineSettings />, <InteruptionsSetting />, <UserSettings />]

  return(
    <div className="Settings">
      <SettingsSideBar activeButton={activeButton} setActive={setActiveButton}/>
      {components[activeButton]}
    </div>
  )
}

export default Settings