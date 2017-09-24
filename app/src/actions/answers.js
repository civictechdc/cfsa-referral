export const SELECT_ANSWER = 'SELECT_ANSWER';
export const LOAD_FIRST_QUESTION = 'LOAD_FIRST_QUESTION';

function selectAnswer(answer, question, nextQuestions) {
      return {
            type: SELECT_ANSWER,
            answer,
            question,
            nextQuestions
      };
}

export function selectedAnswer(thisAnswer, thisQuestion) {
      return (dispatch, getState) => {
            const state = getState();
            const question = state.data.questions.find(question=> question.id === thisQuestion);
            const nextQuestions = question ? question.continueRules[JSON.stringify(thisAnswer)] || [] : [];
            dispatch(selectAnswer(thisAnswer, thisQuestion, nextQuestions));
      }  
}

export function loadFirstQuestion(){
      return (dispatch, getState) => {
            const { data } = getState();
            const firstQuestion = data.questions.find(question => question.start === true);
            dispatch({
                  type: LOAD_FIRST_QUESTION,
                  firstQuestion
            });
      }
}