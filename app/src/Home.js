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
import translation from './translation'

class Home extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(loadFirstQuestion());
    }

    render() {
        const { currentQuestion } = this.props;
        if(this.props.done) { 
            return <Redirect to="/QualifiedPrograms"/>
        }

        if(currentQuestion == null) {
            return <div>{translation.t('LOADING')}</div>
        }
        

        return (
            <Container>
                <Row>
                    <Col className="text-center mt-2">
                        <p>
                            Welcome to the CFSA Referral Program!  Please start filling out the questions in 
                            order to get some recommendations for potential programs to refer the family or
                            individual to.
                        </p>
                    </Col>
                </Row>
                <Row>   
                    <Col>
                        <Question current={currentQuestion} />
                    </Col>
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