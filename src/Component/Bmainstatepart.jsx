import React from 'react'



class Bmainstatepart extends React.Component{
   changestate () {
    this.setState({
      msg :'band karo'
    })
    
  }
  constructor(){
        super();
        this.state ={
          msg : 'Hello i am ankit'
        }
      }
  render(){
    return(
      <>
     <h1>{this.state.msg}</h1>
      <button onClick={()=>this.changestate()}>Click me</button>
      
      </>
    )
  }
}
export default Bmainstatepart;