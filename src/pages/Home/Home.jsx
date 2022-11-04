import React from 'react'
import { Form } from '../../components/Form/Form'
import { FormContainer } from '../../components/FormContainer/FormContainer'
import { Item } from '../../components/Item/Item'
import { ItemsContainer } from '../../components/ItemsContainer/ItemsContainer'
import { Metrics } from '../../components/Metrics/Metrics'
import { MetricsItem } from '../../components/MetricsItem/MetricsItem'
import { Navbar } from '../../components/Navbar/Navbar'

import './Home.scss'

export const Home = () => {

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <main className='home'>
      <Navbar />

      <Metrics>
        <MetricsItem title="Hola" metric='4' />
        <MetricsItem title="Hola" metric='4' />
        <MetricsItem title="Hola" metric='4' />
      </Metrics>

      <div className='home__container'>
        <FormContainer>
          <Form />
        </FormContainer>

        <ItemsContainer>
          {
            data.map(item => <Item dat={item} key={item.id} />)
          }
        </ItemsContainer>
      </div>
    </main>
  )
}
