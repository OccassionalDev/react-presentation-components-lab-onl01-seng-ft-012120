import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }
  
  render() {
    return (
      <div>
        <h1>{ this.state.mood }</h1>
      </div>
      )
  }
}

export default SimpleComponent