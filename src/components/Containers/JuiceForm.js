import React, { Component } from 'react'

export default class JuiceForm extends Component {
    state={
        user:"",
        name:"",
        ingredients:[]
    }

    handleSubmit= event => {
        event.prevent.Default()
        this.props.addJuice(this.state)
        this.setState({
            user:"",
            name:"",
            ingredients:[]
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        const{ user, name, ingredients } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="User"
                        name="user"
                        value={user}
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
                    <button>Save Juice!</button>
                </form>
            </div>
        )

    }
    
}
