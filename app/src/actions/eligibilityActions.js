export const CALCULATE_PROGRAM_ELIGIBILITY = 'CALCULATE_PROGRAM_ELIGIBILITY';
export const ADD_PROGRAM_ELIGIBILITY = 'ADD_PROGRAM_ELIGIBILITY';

function addProgramEligibility(eligiblePrograms) {
    return {
        eligiblePrograms,
        type: ADD_PROGRAM_ELIGIBILITY
    }
}

function calculateProgramEligibity() {
    return (dispatch, getState) => {
        const state = getState();
        const programs = state.data.programs;
        const responses = state.answers.responses;

        const eligiblePrograms = programs.reduce((currentProgram, eligiblePrograms) =>  {
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
    return Object.keys(requiredAnswers).reduce((requiredAnswer, isEligible) => {
        return isEligible && responses[requiredAnswer] == requiredAnswers[requiredAnswer]
    }, true);
}

