import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Question from './components/Question.js'

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Row>   
                    <Col>
                        Go back
                    </Col>
                    <Col>
                        <Question />
                    </Col>
                    <Col>
                        Continue
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;