import React, { Component } from "react";
import {auth} from '../auth/firebase'

class LogIn extends Component {
    constructor(props){
        super(props)
        this.state = {email: 'testuser@depslipts.com',
                      password: 'test123'}
    }

    handleOnChange = (event) =>{
        const {type, value} = event.target;
        if (type === 'email') {
            this.setState({email: value});
        }else if (type === 'password'){
            this.setState({password: value});
        }
    } 

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            // Signed in 
            // ...
            console.log('user logged in', user);
            console.log(this.props)
            this.props.setUser(user);

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage )
        });
    }

    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleOnChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleOnChange}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.handleOnSubmit}>Submit</button>
            </form>
        );
    }
}

export default LogIn;