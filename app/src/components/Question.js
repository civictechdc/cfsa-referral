import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AnswerActions from '../actions/answers'

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
            <Row>   
                <Col>
                    <Form>
                        <FormGroup tag="fieldset">
                            <legend>{this.props.text}</legend>
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" checked={this.props.currentResponse === true} name={this.props.current} onClick={() => this.answerQuestion(true)} />{' '}
                                {this.props.answer.truekey}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" checked={this.props.currentResponse === false} name={this.props.current} onClick={() => this.answerQuestion(false)} />{' '}
                                {this.props.answer.falsekey}
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                    <div></div>
                   
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
