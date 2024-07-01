import {Component} from 'react'
class Counter extends Component{
    state={count:0}
    onIncrement=()=>{
        this.setState(prevState=>{
        console.log('previous state value $ {prevState.count}')
        return {count:prevState.count +1}
        })
    }
    onDecrement=()=>{
        this.setState(prevState=>{  
        console.log('previous state value $ {prevState.count}')
        return {count:prevState.count -1}
     })
        
    }
    render(){
        const{count}=this.state
   
        return(
            <div>
                <h1>Counter</h1>
                <p>{count}</p>
            <div>         
               <button onClick={this.onIncrement}>Increase</button>
                <button onClick={this.onDecrement}>Decrease</button>
            </div>
            </div>

        )
    }
}
export default Counter;