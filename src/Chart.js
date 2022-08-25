import React from 'react'
import ReactPieChart from './components/ReactPieChart'
import ReactBarChart from './components/ReactBarChart'

function Chart() {
  return (
    <>
        <div className="piChart">
           <div className="pichart-design">
               <ReactPieChart />
            </div>
        </div>

        <div className="piChart">
           <div className="pichart-design">
               <ReactBarChart />
            </div>
        </div>
    </>
  )
}

export default Chart