import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBlock,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

import {
    connect
} from 'react-redux';

import {
    push
} from 'react-router-redux';

import {
    calculateProgramsEligibity,
    startOverForEligbility
} from './actions/eligibilityActions';
import translation from './translation';


class QualifiedPrograms extends Component{

    constructor(props){
        super(props);
        this.startOver = this.startOver.bind(this);
    }

    componentWillMount() {
        const {dispatch, answers} = this.props;
        dispatch(calculateProgramsEligibity(answers));
    }

    startOver() {
        const { dispatch } = this.props;
        dispatch(startOverForEligbility());
        dispatch(push('/'));
    }


    renderAnswers() {
        const { questions, answers} = this.props;
        if(Object.keys(answers).length === 0) {
            return (
                <Row className="mt-3">
                    <Col>
                        <Card>
                            <CardBlock className="text-center">
                                <CardTitle>{translation.t('SUBMITTED_ANSWERS')}</CardTitle>
                                <CardText>{translation.t('NO_ANSWERS_SUBMITTED')}</CardText>
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>
            )
        }
        return (
            <Row className="mt-3">
                <Col>
                    <Card>
                        <CardBlock className="text-center">
                            <CardTitle>{translation.t('SUBMITTED_ANSWERS')}</CardTitle>
                            <CardText>
                                {
                                    Object.keys(answers).map((answer) => {
                                        const question = questions.find(question => question.id === parseInt(answer, 10));
                                        return(
                                                <div key={question.id}>
                                                    <h5>{question.question}</h5>
                                                    <p>{translation.t(JSON.stringify(answers[answer]))}</p>
                                                </div>
                                        );
                                    })
                                }
                            </CardText>
                        </CardBlock>
                    </Card>
                </Col>
            </Row>
        )
    }

    render(){
        if(!this.props.calculated) {
            return (
                <Container>
                    <Row className="mt-3">   
                        <Col md={{ size: 8, push: 1, pull: 1, offset: 1 }} sm="12" className="text-center">
                            <Card>
                                <CardBlock>
                                    <CardText>{translation.t('CALCULATING_ELIGIBILITY')}</CardText>
                                </CardBlock>
                            </Card>
                        </Col>
                    </Row>
                    {this.renderAnswers()}
                    <Row className="mt-3">
                        <Col sm={{ size: 3, offset: 4 }}>
                            <Button outline color="primary">{translation.t('START_OVER')}</Button>
                        </Col>
                    </Row>
                </Container>
            );
        }

        if(this.props.programs.length === 0) {
            return (
                <Container>
                    <Row className="mt-3">   
                        <Col md={{ size: 8, push: 1, pull: 1, offset: 1 }} sm="12" className="text-center">
                            <Card>
                                <CardBlock>
                                    <CardTitle>Sorry, the family/individual is not eligible for any programs at this time</CardTitle>
                                    <CardText>As the situtation changes, please make sure to consult this tool again.</CardText>
                                </CardBlock>
                            </Card>
                        </Col>
                    </Row>
                    {this.renderAnswers()}
                    <Row className="mt-3">
                        <Col sm={{ size: 3, offset: 4 }}>
                            <Button onClick={this.startOver} outline color="primary">{translation.t('START_OVER')}</Button>
                        </Col>
                    </Row>
                </Container>
            )
        }

        return (
            <Container>
                <Row>   
                    <Col md={{ size: 8, push: 1, pull: 1, offset: 1 }} sm="12" className="text-center">
                       <h3>Programs the individual/family are eligible for: </h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 8, push: 1, pull: 1, offset: 1 }}>
                        <ListGroup>
                        {
                            this.props.programs.map((program) => {
                                return (<ListGroupItem key={program.id}>{program.program}</ListGroupItem>);
                            })
                        }
                        </ListGroup>
                    </Col>
                </Row>
                {this.renderAnswers()}
                <Row className="mt-3">
                    <Col sm={{ size: 3, offset: 4 }}>
                        <Button onClick={this.startOver} outline color="primary">{translation.t('START_OVER')}</Button>
                    </Col>
                </Row>
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