import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg: 'hello msg'
    }
  }
  changeData () {
    this.setState({
      msg: 'welcome'
    })
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { this.changeData.bind(this) }>修改</button>
      </div>
    )
  }
}
export default App;