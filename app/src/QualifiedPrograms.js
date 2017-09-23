import React, {Component} from 'react';
import {
    Container,
    Row,
    Col
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


    render(){
        console.log(this.props);
        if(this.props.programs.length === 0) {
            return <div>Calculating...</div>
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
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        answers: state.answers.responses,
        programs: state.eligiblePrograms
    }
}

export default connect(mapStateToProps)(QualifiedPrograms);