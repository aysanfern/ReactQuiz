import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


export function NextQuestion(props){
    return (
        <>
        <Alert variant="success">
        <Alert.Heading>Well done!</Alert.Heading>
        <p>
        That was the correct answer!
        </p>
        </Alert>

        {props.last && <Button variant="primary">
            Return to Lesson</Button>}


        {(!props.last) && <Button variant="primary"
        onClick={props.handleNext}
        >Next Question</Button>}
        </>
    )


}