import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import { Wrong } from './Wrong';


export function WrongAnswer(props){
    const [wrong, setWrong] = useState(false)
    function handleWrongClick(){
        setWrong(wrong=>!wrong);
    }

    return(
        <>
        <Button 
        variant="outline-dark"
        size="lg"
        block
        value='correct'
        onClick={handleWrongClick}
        
        >
            {props.children}
        </Button>

        {wrong &&   
            <Wrong
            />}
        </>
    )
}