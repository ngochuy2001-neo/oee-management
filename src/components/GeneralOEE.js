import "../assets/styles/Dashboard.scss"
import GaugeChart from "react-gauge-chart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faGauge } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

function GeneralOEE() {
  return (
    <div className="GeneralOEE">
        <div className="totalStatistic">
          <div className="rowStatistic">
            <div className="statisticItem">
              <p>11178 pcs (40%)</p>
              <FontAwesomeIcon className="statisticItemIcon" icon={faBagShopping}/>
            </div>        
            <div className="statisticItem">
              <p>3h 5m (65,37%)</p>
              <FontAwesomeIcon className="statisticItemIcon" icon={faClock}/>
            </div>        
          </div>
          <div className="rowStatistic">
            <div className="statisticItem">
              <p>60.42 pcs/min</p>
              <FontAwesomeIcon className="statisticItemIcon" icon={faGauge}/>
            </div>
          </div>
        </div>
        <div className="totalGaugeChart">
          <GaugeChart id="totalOEE" 
            nrOfLevels={420}
            style={{
              "width": "auto",
              "height": "auto"
            }}
            arcsLength={[0.6, 0.25, 0.15]}
            colors={['#EA4228', '#F5CD19', '#5BE12C']}
            percent={1.0}
            arcPadding={0}
            cornerRadius={0}
            textColor={"#000000"}
          />
        </div>
    </div>
  )
}
 
export default GeneralOEE