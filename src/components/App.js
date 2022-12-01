import React, { useState } from 'react'
import '../styles/App.css'
import Button from './Button'

function App() {
  const [number, setState] = useState(0)
  const handleClick = (value) => {
    setState(number + value)
  }
  const buttons = [
    {
      type: 1,
      value: 1,
      color: 'red',
    },
    {
      type: 2,
      value: 2,
      color: 'green',
    },
    {
      type: 3,
      value: 3,
      color: 'blue',
    },
    {
      type: 4,
      value: 4,
      color: 'brown',
    },
    {
      type: 5,
      value: 5,
      color: 'yellow',
    },
    {
      type: 6,
      value: 6,
      color: 'red',
    },
    {
      type: 7,
      value: 7,
      color: 'green',
    },
    {
      type: 8,
      value: 8,
      color: 'blue',
    },
    {
      type: 9,
      value: 9,
      color: 'brown',
    },
    {
      type: 10,
      value: 10,
      color: 'yellow',
    },
  ]
  const renderButtons = buttons.map((button, index) => {
    return (
      <Button
        key={index}
        id={index}
        type={button.type}
        value={button.value}
        color={button.color}
        handleAddValue={handleClick}
      />
    )
  })
  return (
    <div>
      <h1 className="text-center">Button Tray</h1>
      <h2 className="text-center text-larger">{number}</h2>
      <div className="flex">{renderButtons}</div>
    </div>
  )
}

export default App
