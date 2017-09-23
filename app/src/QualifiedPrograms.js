import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const PROGRAMS= ["Rapid Housing", "Project Connect"];

export default class QualifiedPrograms extends Component{

    render(){
        var programRows=[];
        for (var i=0;i<PROGRAMS.length;i++){
            programRows.push(<Row><Col>PROGRAMS[i]</Col></Row>);
        }
        return (
            <Container>
                <Row>   
                    <Col>
                        You are eligible for these programs:
                    </Col>
                </Row>
                {programRows}
            </Container>
        )
    }
}