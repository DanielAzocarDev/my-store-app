import React from 'react'

import './MetricItem.scss'

export const MetricsItem = ({ icon, title, metric }) => {
  return (
    <div className="metric">
      <div className="metric__Icon">
        {/* <i className={icon}></i> */}
      </div>
      <div className="metric__container">
        <h3 className="metric__title">{title}</h3>
        <p className="metric__data">{metric}</p>
      </div>
    </div>
  )
}
