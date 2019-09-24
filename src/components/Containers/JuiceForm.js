import React, { Component } from 'react'

export default class JuiceForm extends Component {
    state={
        creator:"",
        name:"",
        imageURL: "",
        ingredients: "",
        directions: ""
    }

    handleSubmit= event => {
        event.preventDefault()
        this.props.addJuice(this.state)
        this.setState({
        creator:"",
        name:"",
        imageURL: "",
        ingredients: "",
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
        const{ creator, name, ingredients, imageURL, directions } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Created By"
                        name="creator"
                        value={creator}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Ingredients"
                        name="ingredients"
                        value={ingredients}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="directions"
                        name="directions"
                        value={directions}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="image"
                        name="imageURL"
                        value={imageURL}
                        onChange={this.handleChange}
                    />
                    <button>Save Juice!</button>
                </form>
            </div>
        )

    }
    
}
