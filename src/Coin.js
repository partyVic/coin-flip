import React, { Component } from 'react'
import head from './head.jpg';
import tail from './tail.jpg'
import './Coin.css'

class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img
                    src={this.props.src}
                    className="Coin-img"
                    alt="Coin-img"
                />
            </div>
        )
    }
}

export default Coin