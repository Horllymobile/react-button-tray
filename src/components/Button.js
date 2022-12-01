import React from 'react'
import '../styles/Button.css'

const Button = (props) => {
  const { id, color, type, handleAddValue, value } = props
  const handleClick = () => {
    handleAddValue(value)
  }
  return (
    <button
      key={id}
      className="button"
      style={{ backgroundColor: color, color: 'white' }}
      onClick={handleClick}
    >
      Plus {type}
    </button>
  )
}

export default Button
