import {useState,useEffect} from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import {Form1} from './components/Form1'
import {Form2} from './components/Form2'


function App() {
  const [question,setQuestion] = useState(0);
  const [last,setLast]=useState(true)

  const myStyle={
    backgroundColor: "lightblue",
    textAlign:'center'
    
  }
  
  useEffect(()=>{
    if (number===(question+1)){
      setLast(true)
    }
    else
    {
      setLast(false)
    }
  })


  const form1 = (<Form1
    handleNext = {handleNext}
    handlePrev={handlePrev}
    question = {question}
    last={last}
    />)
  const form2 =(
    <Form2
    handleNext = {handleNext}
    handlePrev={handlePrev}
    question = {question}
    last={last}
    />)


  const array=[form1,form2]
  const number = array.length


  function handleNext(){
    setQuestion(q => q+1)
  }
  function handlePrev(){
    setQuestion(q => q-1)
  }

  return (
    <div className="App">
      <Jumbotron>

   
    <h1   style = {myStyle}>
        Question {question+1} of {array.length}
        </h1>
  
  {array[question]}

  </Jumbotron>















    </div>

  );
}

export default App;
