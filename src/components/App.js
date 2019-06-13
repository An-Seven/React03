import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [{
        class: '1902',
        name: ['admin', 'root', 'alice']
      },{
        class: '1903',
        name: ['呵呵', '闭包', '咳咳', '三岁']
      }]
    }
  }

  render () {
    let arr = [];
    this.state.list.map((item, index) => {
      let itemArr = [];
      item.name.map((i, num) => {
        itemArr.push(<li key={ num }> {i} </li>)
      })

      let oli = <li key={ index }>{ item.class }<ul>{ itemArr }</ul></li>
      arr.push(oli)
    })

    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App;