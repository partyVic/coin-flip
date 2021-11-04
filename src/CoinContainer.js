import React, { Component } from 'react'
import head from './head.jpg';
import tail from './tail.jpg'
import Coin from './Coin'
import './CoinContainer.css'

class CoinContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            face: null,
            flips: 0,
            coinHead: 0,
            coinTail: 0,
        }
        this.onClick = this.onClick.bind(this)
    }

    flipCoin() {
        const sides = [head, tail]
        let randNum = Math.floor(Math.random() * 2)

        // 方法1
        // this.setState(curState => ({
        //     face: sides[randNum],
        //     flips: this.state.flips + 1,
        //     coinHead: this.state.coinHead + (sides[randNum] === head ? 1 : 0),
        //     coinTail: this.state.coinTail + (sides[randNum] === tail ? 1 : 0)
        // }))

        // 方法2 
        this.setState(curState => {
            let newState = {
                //这里注意要spread curState
                ...curState,
                flips: this.state.flips + 1,
                face: sides[randNum],
            }
            if (sides[randNum] === head) {
                newState.coinHead++
            } else {
                newState.coinTail += 1
            }

            console.log(curState, newState)
            return newState
        })
    }

    onClick() {
        this.flipCoin()
    }

    render() {
        return (
            <div className="CoinContainer">
                <h2>Let's flip a coin</h2>
                {this.state.face && <Coin src={this.state.face} />}
                <button onClick={this.onClick}>Flip Me</button>
                <h4>
                    Out of {this.state.flips} flips, there you have been {this.state.coinHead} heads and {this.state.coinTail} tails
                </h4>
            </div>
        )
    }
}

export default CoinContainer