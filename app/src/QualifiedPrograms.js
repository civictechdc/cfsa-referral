import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBlock,
    CardTitle,
    CardText
} from 'reactstrap';

import {
    connect
} from 'react-redux';

import {
    calculateProgramsEligibity
} from './actions/eligibilityActions';


class QualifiedPrograms extends Component{

    componentWillMount() {
        const {dispatch, answers} = this.props;
        dispatch(calculateProgramsEligibity(answers));
    }


    renderAnswers() {
        const { questions, answers} = this.props;
        return (
            <Row>
                <Col>
                    {
                        Object.keys(answers).map((answer) => {
                            const question = questions.find(question => question.id === answer);
                           return(
                                <div>
                                    <p>{answers[answer]}</p>
                                    <p>{}</p>
                                </div>
                           )
                        })
                    }
                </Col>
            </Row>
        )
    }

    render(){
        console.log(this.props);
        if(!this.props.calculated) {
            return <div>Calculating...</div>
        }

        if(this.props.programs.length === 0) {
            return (
                <Container>
                    <Row className="mt-3">   
                        <Col>
                            <Card>
                                <CardBlock>
                                    <CardTitle>Sorry, the family/individual is not eligible for any programs at this time</CardTitle>
                                    <CardText>As the situtation changes, please make sure to consult this tool again.</CardText>
                                </CardBlock>
                            </Card>
                        </Col>
                    </Row>
                    {this.renderAnswers()}
                </Container>
            )
        }

        return (
            <Container>
                <Row>   
                    <Col>
                       Programs you are eligible for 
                    </Col>
                </Row>
                {
                    this.props.programs.map((program) => {
                        return (<Row><Col>{program.program}</Col></Row>);
                    })
                }
                {this.renderAnswers()}
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        answers: state.answers.responses,
        questions: state.data.questions,
        programs: state.eligiblePrograms,
        calculated: state.answers.calculated
    }
}

export default connect(mapStateToProps)(QualifiedPrograms);