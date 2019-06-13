import React, { Component } from 'react'
import axios from 'axios'
import '@/list.scss'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    axios('http://www.daxunxun.com/douban').then(res => {
      console.log(res);    
      this.setState({
        list: res.data
      })
    })
  }
  render () {
    return (
      <ul className="list">
        {
          this.state.list.map(item => {
            return(<li key = { item.id } style= {
              {
                width: '100%',
                height: '30px',
                lineHeight: '30px',
                color:'#fff',
                borderBottom: '1px solid #ccc'
              }
            }>{ item.title }</li>)
          })
        }
      </ul>
    )
  }
}
export default App;