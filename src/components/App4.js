import React, { Component } from 'react'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg: '你哈哈'
    }
  }
  render () {
    return (
      <div>
        {this.state.msg}
        <button onClick = { () => {
          this.setState({
            msg: '窝窝奶毒'
          })
        }}>Update</button>
      </div>
    )
  }
}
export default App;