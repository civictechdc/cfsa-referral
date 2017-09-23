import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AnswerActions from '../actions/answers'

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: this.props.currentQuestion,
            answer: null
        }
    }
    render() {
        return (
            <Row>   
                <Col>
                    <button
                        onclick={this.props.dispatch(AnswerActions.selectedAnswer({[this.state.answer]: [this.state.question]}))}
                    >
                    </button>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Question);
