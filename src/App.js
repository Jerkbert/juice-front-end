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


  // addJuice = (name, imageURL, user_id, creator, ing, directions)  => {
  //   const newJuice = {name, imageURL, user_id, creator, ing, directions}
  //   const juiceList = [...this.state.juices, newJuice]
  //   this.setState({
  //     juices: {juiceList}
  //   })

  //   const body = {name:name, imageURL:imageURL, user_id:user_id, creator:creator, ing:ing, directions:directions}
  //   fetch('http://localhost:3000/juices', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify(body)
  //   })
  //   .catch(error => (console.log(error)))
  // }
  
  addJuice = (juice) => {
    console.log('check', juice)
    // const newJuice = { ...juice}
    fetch('http://localhost:3000/juices', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(juice),
    })
    // console.log(juice)
    this.setState({
      juices: [juice, ...this.state.juices]
    })
    
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

