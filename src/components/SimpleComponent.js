import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }
  
  handleClick() {
    if (this.state === "happy") {
      const newMood = "sad"
    }
    
    else {
      const newMood = "happy"
    }
    
    this.setState({
      mood: newMood
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