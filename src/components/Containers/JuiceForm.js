import React, { Component } from 'react'

export default class JuiceForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            imageURL: "",
            user_id: 2,
            creator:"",
            ing: "",
            directions: ""
        }
    }
    

    handleSubmit = event => {
        event.preventDefault()
        this.props.addJuice(this.state)
        this.setState({
            creator:"",
            name:"",
            imageURL: "",
            ing: "",
            directions: ""
        })
      
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        // const{ creator, name, ing, imageURL, directions } = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Created By"
                        name="creator"
                        value={this.state.creator}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Ingredients"
                        name="ing"
                        value={this.state.ing}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="directions"
                        name="directions"
                        value={this.state.directions}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="image"
                        name="imageURL"
                        value={this.state.imageURL}
                        onChange={this.handleChange}
                    />
                    <button>Save Juice!</button>
                </form>
            </div>
        )

    }
    
}
