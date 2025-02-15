import Welcome from './components/Counter'
import { Component } from 'react';

class App extends Component {
  state={isLoggedIn : true,}

  buttonAuth=()=>{
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
     {this.buttonAuth()}
      
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

*/

export default App;
