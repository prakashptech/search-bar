import React, { Component } from 'react'

class Item extends Component {
    render() {
        return (
            <div>
                {this.props.item}
               
            </div>
        )
    }
}

export default Item