import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./quizStart.css";
import modelInstance from "../data/QuizModel";



class QuizStart extends Component {
    constructor(props){
      super(props);
      this.state = {
        userInput: null,
       
      };
    }

    startQuiz(){
      let userInput = document.getElementById('message').value;
      console.log(userInput);
      window.location.replace('question');
      return userInput;
       
   }

   
  

  render() {
    let input = <input  type="text" id="message" name="message"/>;
    return (
    <div>
      <div className="headline">Welcome to your message submission!</div>
      <div className="headtext1">Type a message to the door-display
      </div>
      {input}
        <button className="startBtnQuiz" onClick={() =>{this.startQuiz()}}>Submit message!</button>
        </div> 
           
           
   
    );
  
}
}

export default QuizStart;
