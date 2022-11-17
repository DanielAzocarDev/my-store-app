import React from 'react'
import { ActionsContainer } from '../../components/ActionsContainer/ActionsContainer'
import { Item } from '../../components/Item/Item'
import { ItemsContainer } from '../../components/ItemsContainer/ItemsContainer'
import { Metrics } from '../../components/Metrics/Metrics'
import { MetricsItem } from '../../components/MetricsItem/MetricsItem'
import { Navbar } from '../../components/Navbar/Navbar'

import './Home.scss'
import { Action } from '../../components/Action/Action'
import { useSelector } from 'react-redux'

export const Home = () => {

  const products = useSelector((state) => state.items.items)

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
            products.length > 0 ? products.map(product => <Item data={product} key={product.id} />) : <p className='home__empty'>No products</p>
          }
        </ItemsContainer>
      </div>
    </main>
  )
}
