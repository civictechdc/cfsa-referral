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
import Question from 'components/Question'
import {
    loadFirstQuestion
} from 'actions/answers';
import translation from 'translation'

export class Home extends Component {

    componentWillMount() {
        this.props.loadFirstQuestion()
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

const mapStateToProps = (state) => {
    return {
        currentQuestion: state.answers.current,
        previousQuestions: state.answers.previous,
        futureQuestions: state.answers.future,
        done: state.answers.done,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadFirstQuestion: () => {
            dispatch(loadFirstQuestion())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
