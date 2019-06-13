import React, { Component } from 'react'
class App extends Component {
  constructor(props){
    super(props);
    this.btnClick= this.btnClickFn.bind(this);
    this.state = {
      msg: 'nihao'
    }
  }
  btnClickFn () {
    this.setState({
      msg: 'word'
    })
  }

  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { this.btnClick }>update</button>
      </div>
    )
  }
}
export default App;