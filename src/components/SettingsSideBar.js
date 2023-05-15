
function SettingsSideBar( {activeButton, setActive} ) {

  const buttons = [
    {
      id: 0,
      label: "Machine"
    },
    {
      id: 1,
      label: "Interuption"
    },
    {
      id: 2,
      label: "User"
    }
  ]

  const onClickTab = (buttonID) => {
    console.log(buttonID)
    setActive(buttonID)
  }
  
  
  return(
    <div className="SettingsSideBar">
      {
        buttons.map((button) => {
          return(
            <button key={button.id} onClick={() => onClickTab(button.id)} className={`tabSidebar ${button.id === activeButton ? 'active' : ''}`} >{button.label}</button>
          )
        })
      }
    </div>
  )
}

export default SettingsSideBar