
const initialState = {
    current: null,
    previous: [],
    future: [],
    responses: {}
}

function answers(state = initialState, action) {
    switch(action.type) {
        case 'SELECT_ANSWER':
            return {...state, [action.question]: [action.answer]}
            break;
        default:
            return initialState;
    }
}

export default answers;