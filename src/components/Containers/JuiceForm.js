import React, { Component } from 'react'

export default class JuiceForm extends Component {
    state={
        creator:"",
        name:"",
        imageURL: "",
        ing: "",
        directions: ""
    }

    handleSubmit= event => {
        event.preventDefault()
        this.setState({
            creator:"",
            name:"",
            imageURL: "",
            ing: "",
            directions: ""
        })
        this.props.addJuice(this.state)
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        const{ creator, name, ing, imageURL, directions } = this.state
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
                        name="ing"
                        value={ing}
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
