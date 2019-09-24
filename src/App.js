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

  addJuice= (juice) => {
    const newJuice = {id:Date.now(), ...juice}
    this.setState({
      juices: [newJuice, ...this.state.juices]
    })
  }

  render() {
    return (
      <div>
        <JuiceForm addJuice={this.addJuice} />
        {this.state.juices.length > 0 ? <Container juices={this.state.juices}/> : null}
      </div>
    )
  }
}

