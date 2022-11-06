import React from 'react'

import { AccountBalanceWalletOutlined } from '@mui/icons-material';

import './MetricItem.scss'

export const MetricsItem = ({ icon, description, metric }) => {
  return (
    <div className="metric">
      <AccountBalanceWalletOutlined className='metric__icon' fontSize='large' />
      <div className="metric__container">
        <h3 className="metric__data">{metric}</h3>
        <p className='metric__description'>{description}</p>
      </div>
    </div>
  )
}
