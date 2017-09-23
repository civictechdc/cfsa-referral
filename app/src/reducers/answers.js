import {
    LOAD_FIRST_QUESTION,
    SELECT_ANSWER
} from '../actions/answers';


const initialState = {
    current: null,
    previous: [],
    future: [],
    responses: {},
    done: false
}

function answers(state = initialState, action) {
    switch(action.type) {
        case SELECT_ANSWER: {
            const {answer, question, nextQuestions} = action;
            const allFutureQuestions = [...state.future, ...nextQuestions];
            const done = allFutureQuestions.length === 0;
            return {
                ...state,
                done,
                current: allFutureQuestions[0] || null,
                previous: [
                    ...state.previous,
                    question
                ],
                future: allFutureQuestions.slice(1),
                responses: {
                    ...state.responses,
                    [question]: answer}
                }
            }
        case LOAD_FIRST_QUESTION:
            return {
                ...state,
                current: action.firstQuestion.id
            }
        default:
            return state;
    }
}

export default answers;