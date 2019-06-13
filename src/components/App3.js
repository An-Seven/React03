import React, { Component } from 'react'
class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    msg: 'hahi'
    }
  }
  changeData () {
    this.setState({
      msg: 'yami'
    })
  }
  render () {
    return (
      <div>
        {this.state.msg}
        <button onClick = { (e) => this.changeData(e) }>修改</button>
      </div>
    )
  }
}
export default App;