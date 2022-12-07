import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            qty: "",
            id: uuid()
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        (this.state.name && this.state.qty) && this.props.add(this.state);
        this.setState(state => ({
            name: "",
            qty: "",
            id: uuid()
        }))
    }

    handleChange(e) {
        this.setState(state => ({
            [e.target.name]: e.target.value,
        }))
        // e.target.value
    }

    render() {
        return (
            <div>
                <h2>Add your Shopping Items</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'> Item</label>
                    <input type="text" name="name" id="name" placeholder="item name" value={this.state.name} onChange={this.handleChange}/>

                    <label htmlFor='qty'> Quantity</label>
                    <input type="text" name="qty" id="qty" placeholder="quantity" value={this.state.qty} onChange={this.handleChange}/>

                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}

export default ShoppingListForm;