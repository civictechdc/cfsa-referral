import React, {Component} from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import {
    Redirect
} from 'react-router';
import {connect} from 'react-redux';
import Question from './components/Question'
import {
    loadFirstQuestion
} from './actions/answers';
import { push } from 'react-router-redux'
import QualifiedPrograms from './QualifiedPrograms';
import translation from './translation'

class Home extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(loadFirstQuestion());
    }

    render() {
        const { currentQuestion, dispatch } = this.props;
        if(this.props.done) { 
            return <Redirect to="/QualifiedPrograms"/>
        }

        console.log(translation);
        if(currentQuestion == null) {
            return <div>{translation.t('loading')}</div>
        }
        

        return (
            <Container>
                <Row>   
                    <Col>
                        <Question current={currentQuestion} />
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        currentQuestion: state.answers.current,
        previousQuestions: state.answers.previous,
        futureQuestions: state.answers.future,
        done: state.answers.done,
    }
}

export default connect(mapStateToProps)(Home);