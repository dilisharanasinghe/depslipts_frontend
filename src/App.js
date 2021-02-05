import React, { Component } from "react";
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'


class App extends Component {
    state = {user: null
    }

    setUser = (user) => {
        this.setState({user: user});
    }

    selectedRender(){
        if (!this.state.user){
            return(
            <div className='container'>
                <LogIn setUser={this.setUser}/>
            </div>); 
        }else{
            return <Dashboard currentUser={this.state.user}/>; 
        }
    }
    render() {
        return this.selectedRender();
    }
}

export default App;