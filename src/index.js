import React from 'react';
import ReactDOM from 'react-dom';

import './script.css';
import {Questionsec} from './components/quesection';
import {Result} from './Playagain';

class Short extends React.Component{
   
   constructor(props){
    super(props);
    this.state={quebank:[], click: 0 , response:0 }
    this.getQuestion=this.getQuestion.bind(this);
   }

   async getQuestion(){
    const url="https://opentdb.com/api.php?amount=5&type=multiple";
    const response= await fetch(url);
   
        const data= await response.json();
    

    this.setState({quebank:data.results});
   }

     componentDidMount(){
       this.getQuestion();
   
   }


   againplay(){
       this.getQuestion();
       this.setState({response:0 , click:0 });
   }

   computeanswer(answer,correct_ans){
       if(answer === correct_ans){
           this.setState({click: this.state.click + 1 , response: this.state.response + 1 });
       }else{
           this.setState({click: this.state.click + 1});
       }
   }


   
    render(){
        
        return (
               <div className="container">
                   
                  <div className="title" >Quiz question</div>

                  <div>
                  {this.state.quebank?.length>0 && this.state.click<5 && this.state.quebank.map((x,index)=> <Questionsec key={index} selected={answer=>this.computeanswer(answer, this.state.quebank[index].correct_answer)} res={this.state.quebank[index]}/>)}

                  {this.state.click===5 ? <Result score={this.state.response} playagain={this.againplay.bind(this)}/> : null }
                  
                  </div>
                 
                 
               </div> 
        )
    }
}

ReactDOM.render(<Short/> , document.getElementById("root"));
