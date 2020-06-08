import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }
  
  handleClick() {
    if (this.state)
    this.setState({
      mood: "sad"
    })
  }
  
  render() {
    return (
      <div onClick={ this.handleClick }>
        <h1>{ this.state.mood }</h1>
      </div>
      )
  }
}

export default SimpleComponent