import Jumbotron from 'react-bootstrap/Jumbotron'
import {Correct} from './Correct'
import { WrongAnswer } from './WrongAnswer'
import Button from 'react-bootstrap/Button'
import {useEffect,useState} from 'react'

export function Form1(props){
    const [disabled, setDisabled] = useState(null)

    useEffect(()=>{
      if (props.question === 0 ){
        setDisabled(true)
      }
    },[])

    return(
        <>
          
        <Button disabled={disabled} onClick={props.handlePrev}>
        Previous Question
        </Button>


        <Correct
        handleNext={props.handleNext}
        last={props.last}
        >
            Question Correct
        </Correct>
        <WrongAnswer>
          Question Wrong
        </WrongAnswer>
        </>
    )
    }