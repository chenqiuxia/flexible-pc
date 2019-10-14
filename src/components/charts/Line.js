import * as React from 'react'
import { LineChart } from 'viz-charts'

const data = [
  ['2000', 7],
  ['2001', 18],
  ['2002', 28],
  ['2003', 14],
  ['2004', 30]
]

const Line = () => {
  return <LineChart name="Coffee" data={data}></LineChart>
}

export default Line