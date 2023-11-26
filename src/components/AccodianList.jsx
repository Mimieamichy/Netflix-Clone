import React from 'react'
import { accodian } from '../constants/data'
import Accodian from './Accodian'
import "./accodianList.css"
import GetStarted from './GetStarted'

export default function AccodianList() {
  return (
    <div className='accodianList-section'>
      {
        accodian.map((data) => {
          return <Accodian key={data.id} {...data} />
        })
      }
      <GetStarted />
    </div>
  )
}
