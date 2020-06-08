import React from 'react'

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: "happy"
    }
  }
  
  handleClick = () => {
    let newMood;
    
    if (this.state.mood === "happy") {
      newMood = "sad"
    }
    
    else {
      newMood = "happy"
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