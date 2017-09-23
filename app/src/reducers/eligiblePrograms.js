import {ADD_PROGRAM_ELIGIBILITY} from '../actions/eligibilityActions';

function eligiblePrograms(state = [], action) {
    switch(action.type) {
        case ADD_PROGRAM_ELIGIBILITY:
            return [...state, ...action.eligiblePrograms]
        default:
            return state;
    }
}

export default eligiblePrograms;