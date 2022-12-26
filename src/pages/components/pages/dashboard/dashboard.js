import React from 'react'
import './style.css'

function Dashboard() {
  return (
    <div className='dashboard_container'>
      <div className='stats'>
        <Cardcreate count="100">Visitors</Cardcreate>
        <Cardcreate count="20">Test</Cardcreate>
        <Cardcreate count="20">Test</Cardcreate>
      </div>
    </div>
  )
}

function Cardcreate({count,children,...props}){
  return(
    <div className='card'>
      <h1>{count}</h1>
      <span>{children}</span>
    </div>
  )
}

export default Dashboard