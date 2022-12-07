import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm.js';
import { v4 as uuid } from 'uuid';


class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                // {name:"milk", qty:"2 bottles", id: uuid()},
                // {name:"rice", qty:"1 5kg bag", id: uuid()}
            ]
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        this.setState(state => (
            {items: [...state.items, item]}
        ))
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.items.map((item, i) => (<li key={item.id}>{i + 1}. {item.name}={item.qty}</li>))
                    }
                </ul>

                <ShoppingListForm add={this.addItem}/>
            </div>
        )
    }
}

export default ShoppingList;