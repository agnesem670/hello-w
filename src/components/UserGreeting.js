import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        //&& logical and - evaluate only when value is true

        return this.state.isLoggedIn && <div>Welcome Myself</div> 

        // TERNARY OPERATOR
        /* return this.setState.isLoggedIn ? (
            <div>Welcome Myself</div> 
            ):(
            <div>Welcome Guest</div>
        ) */

        // JSX set to variable
        /* let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Myself</div>
        } else {
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div> */

        //--------------------------
        /* if (this.state.isLoggedIn) {
            return <div>Welcome Myself</div>
        } else {
            return <div>Welcome Guest</div>
        } */
        // IF-ELSE CONDITIONS DOES'T WORK INSIDE JSX
        //-------------------------
        /* return (
            <div>
                <div>Welcome Myself</div>
                <div>Welcome Guest</div>
            </div>
        ) */
    }
}

export default UserGreeting