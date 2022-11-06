import React from 'react'
import { Form } from '../../components/Form/Form'
import { ActionsContainer } from '../../components/ActionsContainer/ActionsContainer'
import { Item } from '../../components/Item/Item'
import { ItemsContainer } from '../../components/ItemsContainer/ItemsContainer'
import { Metrics } from '../../components/Metrics/Metrics'
import { MetricsItem } from '../../components/MetricsItem/MetricsItem'
import { Navbar } from '../../components/Navbar/Navbar'

import './Home.scss'
import { Action } from '../../components/Action/Action'

export const Home = () => {

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <main className='home'>
      <Navbar />

      <Metrics>
        <MetricsItem description="Your net income" metric='$100.500' />
        <MetricsItem description="Your remaining stock" metric='50' />
        <MetricsItem description="Amount invested" metric='$31.000' />
        <MetricsItem description="Sales of the month" metric='$45.000' />
      </Metrics>

      <div className='home__container'>
        <ActionsContainer>
          <Action />
        </ActionsContainer>

        <ItemsContainer>
          {
            data.map(item => <Item dat={item} key={item.id} />)
          }
        </ItemsContainer>
      </div>
    </main>
  )
}
