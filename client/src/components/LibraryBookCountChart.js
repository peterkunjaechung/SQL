import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

const LibraryBookCountChart = () => {
  const [count, setCount] = useState([])

  useEffect(() => {
    axios.get('/api/libraries')
      .then(res => {
        setCount(res.data)
      })
  }, [])

  return (
    <BarChart
      width={700}
      height={600}
      data={count}
      barSize={40}
      layout='vertical'
      margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar name="Book Count" dataKey="book_count" fill="#0066cc" />
    </BarChart>
  )
}

export default LibraryBookCountChart
