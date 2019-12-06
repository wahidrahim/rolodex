import React, { Component } from 'react'
import axios from 'axios'

import { CardList } from './components/card-list/card-list.component'

import './App.css'

class App extends Component {
  newString = 'testing'

  constructor() {
    super()

    this.state = {
      monsters: []
    }
  }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    this.setState({ monsters: res.data })
  }

  render() {
    return (
      <div className="monsters">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    )
  }
}

export default App
