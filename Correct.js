import Button from 'react-bootstrap/Button'
import {NextQuestion} from './NextQuestion'
import {useState} from 'react'


export function Correct(props){
    const [yes, setYes] = useState(false)
    function handleCorrectClick(){
        setYes(yes=>!yes);
    }

    return(
        <>
        <Button 
        variant="outline-dark"
        size="lg"
        block
        value='correct'
        onClick={handleCorrectClick}
        
        
        >
            {props.children}
        </Button>

        {yes &&   
            <NextQuestion
            last={props.last}
            handleNext={props.handleNext}
            />}
        </>
    )
}