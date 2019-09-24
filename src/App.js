import React, { Component } from 'react'
import './App.css'
import Container from './components/Containers/Container'
import JuiceForm from './components/Containers/JuiceForm' 

export default class App extends Component {

  state={
    juices: []
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/juices')
    .then(response => response.json())
    .then(result => this.setState({
      juices: result
    }))
  }

  addJuice = (juice) => {
    const newJuice = {userId: 1, ...juice}
    this.setState({
      juices: [newJuice, ...this.state.juices]
    })
    fetch('http://localhost:3000/juices', {
      method: 'POST',
      body: JSON.stringify(newJuice),
      headers: {
        'Content-Type':'application/json'
      }
    })
    console.log(newJuice)
  }

  render() {
    return (
      <div>
      <nav>
        <JuiceForm addJuice={this.addJuice} />

      </nav>
        {this.state.juices.length > 0 ? <Container juices={this.state.juices}/> : null}
      </div>
    )
  }
}

