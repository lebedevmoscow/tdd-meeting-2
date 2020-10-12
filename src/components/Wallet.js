import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Wallet extends Component {
    
    render() {
        console.log('props', this.props)
        return (
            <div>
                <h3 className="balance">Wallet balance: {this.props.balance}</h3>
            </div>
        )
    }
}

export default connect((state) => {
    return {balance: state}
}, null)(Wallet)