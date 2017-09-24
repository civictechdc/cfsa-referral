export const CALCULATE_PROGRAM_ELIGIBILITY = 'CALCULATE_PROGRAM_ELIGIBILITY';
export const ADD_PROGRAM_ELIGIBILITY = 'ADD_PROGRAM_ELIGIBILITY';
export const START_OVER_ELIGBILITY = 'START_OVER_ELIGBILITY';

function addProgramEligibility(eligiblePrograms) {
    return {
        eligiblePrograms,
        type: ADD_PROGRAM_ELIGIBILITY
    }
}

export function startOverForEligbility() {
    return {
        type: START_OVER_ELIGBILITY
    }
}

export function calculateProgramsEligibity(responses) {
    return (dispatch, getState) => {
        const state = getState();
        const programs = state.data.programs;
        
        const eligiblePrograms = programs.reduce((eligiblePrograms, currentProgram) =>  {
            const requiredAnswers = currentProgram.questions;
            const eligible = calculateProgramEligibity(requiredAnswers, responses)
            if(eligible) {
                return [...eligiblePrograms, currentProgram]
            }
            return eligiblePrograms;
        }, [])

        dispatch(addProgramEligibility(eligiblePrograms));
    }
}

function calculateProgramEligibity(requiredAnswers, responses) {
    return Object.keys(requiredAnswers).reduce((isEligible, requiredAnswer) => {
        return isEligible && !!responses[requiredAnswer] === requiredAnswers[requiredAnswer];
    }, true);
}

