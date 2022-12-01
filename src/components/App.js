import React, { useState } from 'react'
import '../styles/App.css'
import Button from './Button'
import AddButton from './AddButton'

function App() {
  const [number, setState] = useState(0)
  const [buttons, setButtonState] = useState([
    {
      number: 1,
      value: 1,
      color: 'red',
    },
    {
      number: 2,
      value: 2,
      color: 'green',
    },
  ])
  const handleClick = (value) => {
    setState(number + value)
  }
  const renderButtons = buttons.map((button, index) => {
    return (
      <Button
        key={index}
        id={index}
        type={button.number}
        value={Number(button.value)}
        color={button.color}
        handleAddValue={handleClick}
      />
    )
  })

  const handleFormSubmit = (button) => {
    setButtonState([...buttons, button])
  }
  return (
    <div>
      <h1 className="text-center">Button Tray</h1>
      <h2 className="text-center text-larger">{number}</h2>
      <AddButton handleFormSubmitEvent={handleFormSubmit} />
      <div className="flex">{renderButtons}</div>
    </div>
  )
}

export default App
