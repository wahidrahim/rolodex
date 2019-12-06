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
        <CardList monsters={this.state.monsters}>
          {this.state.monsters.map(monster => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })}
        </CardList>
      </div>
    )
  }
}

export default App
