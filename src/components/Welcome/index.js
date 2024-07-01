import './App.js'
import React from 'react';

const Welcome=(props)=>{
    const{name,greeting}=props;
    return (
    <h1>{greeting},{name}</h1>
  )
};
export default Welcome;

//
/*
import Welcome from './components/Welcome'
import { Component } from 'react';
class App extends Component {
  state={isLoggedIn : true,}

  ButtonAuth=()=>{
    const {isLoggedIn}=this.state
    if(isLoggedIn === true)
    {
      return <button>Logout</button>
    }
   
      return <button>Login</button>
    
  }
    render(){
    
    return(
      <div>
        <Welcome greeting="hello" name="user "/>
     {this.ButtonAuth()}
      
      </div>
    )
  }
}

/*
Element variable

let Buttonauth;
if(isLoggedIn === true)
    {
      Buttonauth= <button>Logout</button>
    }
    else
    {
   
      Buttonauth= <button>Login</button>
    
  }
  render(){
    
    return(
      <div>
        <Welcome greeting='hello' name='user' />
     {ButtonAuth()}
      
      </div>
    )
  }



  //

  TERNARY OPERATOR
  render(){
    
    return(
      <div>
        <Welcome greeting="hello" name="user "/>
     {isLoggedIn?<button>Logout</button> : <button>Login</button>}
     or
       {isLoggedIn?<button>Logout</button> : null}
      </div>
    )



    //logical &&
    render(){
    
    return(
      <div>
        <Welcome greeting="hello" name="user "/>
     {isLoggedIn?<button>Logout</button> : <button>Login</button>}
       {isLoggedIn && <button>Logout</button>}
         {! isLoggedIn && <button>Logout</button>}
      </div>
    )


export default App;

*/