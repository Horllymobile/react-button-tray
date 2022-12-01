import React, { useState } from 'react'
import '../styles/AddButton.css'

const AddButton = (props) => {
  let { handleFormSubmitEvent } = props
  const [state, setState] = useState({ number: '', value: 0, color: '' })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!state.number || !state.value || !state.color) {
      alert('All fields are required')
      return
    }
    handleFormSubmitEvent(state)
  }
  return (
    <div style={{ marginBottom: '20px' }}>
      <form className="for-flex" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="number">Number</label>
          <input
            className="input"
            type="text"
            name="number"
            value={state.number}
            placeholder="Number"
            onChange={(e) => setState({ ...state, number: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input
            className="input"
            type="text"
            name="color"
            value={state.color}
            onChange={(e) => setState({ ...state, color: e.target.value })}
            placeholder="Color"
          />
        </div>
        <div>
          <label htmlFor="value">Value</label>
          <input
            className="input"
            type="number"
            name="value"
            value={state.value}
            onChange={(e) => setState({ ...state, value: e.target.value })}
            placeholder="Value"
          />
        </div>
        <button className="button">Add</button>
      </form>
    </div>
  )
}

// class AddButton extends React.Component {
//   state = {
//     number: '',
//     value: '',
//     color: '',
//   }
//   handleFormSubmit(e) {
//     e.preventDefault()
//     // if (!this.state?.number || !this.state?.value || !this.state?.color) {
//     //   alert('All fields are required')
//     //   return
//     // }
//     console.log(this.state)
//   }
//   render() {
//   }
// }

export default AddButton
