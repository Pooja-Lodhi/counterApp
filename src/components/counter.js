import React from "react";
class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count :0,
        }
    }
    increment=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }

    decrement=()=>{
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }
   reset=()=>{
        this.setState(
            {
                count :0
            }
        )
    }

    render(){
        return(
            <>
            <div style={style.container}>
                <h1>Counter App</h1>
            <h1>{this.state.count}</h1>
            <button style={style.buttond} onClick={this.increment}>increment</button>
            <button onClick={this.reset}>reset</button>
            <button style={style.buttoni} onClick={this.decrement}>decrement</button>
            </div>
            </>
        )
        
    }
}

const style={
     container:{
        textAlign:'center',
        marginTop:'50px'
     },
     buttond:{
        margin:'5px',
        padding:'10px 20px',
        fontSize:'16px'
     },
     buttoni:{
        margin:'5px',
        padding:'10px 20px',
        fontSize:'16px'
     }
}
export default Counter;

