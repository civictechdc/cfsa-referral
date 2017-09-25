import React from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBlock,
    CardTitle
} from 'reactstrap';
import { connect } from "react-redux";
import * as AnswerActions from '../actions/answers'
import translation from '../translation';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.answerQuestion = this.answerQuestion.bind(this);
    }

    answerQuestion(answer) {
        const { dispatch, current } = this.props;
        dispatch(AnswerActions.selectedAnswer(answer, current))
    }

    render() {
        return (
            <Row className="mt-2">   
                <Col md={{ size: 8, push: 1, pull: 1, offset: 1 }} sm="12">
                    <Card className="text-center">
                        <CardBlock>
                            <CardTitle>{translation.t(this.props.text)}</CardTitle>
                        </CardBlock>
                        <Form className="mr-3">
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                    <Label check>
                                    <Input type="radio" checked={this.props.currentResponse === true} name={this.props.current} onClick={() => this.answerQuestion(true)} />{' '}
                                    {translation.t(this.props.answer.trueKey)}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                    <Input type="radio" checked={this.props.currentResponse === false} name={this.props.current} onClick={() => this.answerQuestion(false)} />{' '}
                                    {translation.t(this.props.answer.falseKey)}
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state, props) {
    const theQuestion = state.data.questions.find(question => question.id === props.current);

  return {
      text: theQuestion.question,
      type: theQuestion.type,
      answer: theQuestion.answer,
      currentResponse: state.answers.responses[props.current]
  };
}

export default connect(mapStateToProps)(Question);
