import React, { Component } from 'react'
import axios from 'axios'

import { CardList } from './components/card-list/card-list.component'

import './App.css'

class App extends Component {
  newString = 'testing'

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    this.setState({ monsters: res.data })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    )

    return (
      <div className='monsters'>
        <input
          type='search'
          placeholder='search'
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App
