import React, { Component } from 'react'
import axios from 'axios'
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
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}

export default App
