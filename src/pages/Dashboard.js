import "../assets/styles/Dashboard.scss"
import GaugeChart from "react-gauge-chart"

function Dashboard(){
  return(
    <div className="Dashboard">
      <div className="generalOEE">
        <div className="totalStatistic">

        </div>
        <div className="totalGaugeChart">
          <GaugeChart id="totalOEE" 
            nrOfLevels={420}
            arcsLength={[0.6, 0.25, 0.15]}
            colors={['#EA4228', '#F5CD19', '#5BE12C']}
            percent={0.60}
            arcPadding={0}
            cornerRadius={0}
            textColor={"#000000"}
          />
        </div>
      </div>
      <div className="detailOEE"></div>
    </div>
  )
}

export default Dashboard