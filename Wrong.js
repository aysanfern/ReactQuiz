import Alert from 'react-bootstrap/Alert'


export function Wrong(){
    return (
        <>
        <Alert variant="danger">
        <Alert.Heading>Not Quite!</Alert.Heading>
        <p>
        That was the wrong answer!
        </p>
        </Alert>
        </>
    )


}