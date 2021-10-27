import React from "react";
import "./comp.css";

export class Questionsec extends React.Component{

 constructor(props){
    super(props)
  //push is not working because this.state is immutable so it can cause bugs, where as concat give us the new array;  
    let arr = this.props.res.incorrect_answers.concat(this.props.res.correct_answer); 
    arr=arr.sort(() => Math.random() - 0.5); 
    this.state={statearr:arr,state_color:"yellow"};
          
     this.responseclick=this.responseclick.bind(this);   
 }   

   
    responseclick(event){
     //accessing the text , also see how we can access the element attributes using event
       if(event.target.textContent===this.props.res.correct_answer){
          this.setState({statearr: [event.target.textContent] , state_color:"green" })
       }else{
         this.setState({statearr: [event.target.textContent] , state_color:"red" })
       }
      
      this.props.selected(event.target.textContent);
    }
    
    render(){
          
       return( 
        <div className='quecontainer'>
           <div className='quebox'>Q:{" "}{this.props.res.question}</div>
           <div className="answerbox">

{this.state.statearr.map((x,index)=> <button key={index} className='spanbox' onClick={this.responseclick} style={{backgroundColor:this.state.state_color}}>{x}</button>)}

           </div>
        </div>
       )
       
    }
    
}