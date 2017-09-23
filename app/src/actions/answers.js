export const SELECT_ANSWER = 'SELECT_ANSWER';

function selectAnswer(answer, question) {
      return {
            type: SELECT_ANSWER,
            answer: answer,
            question: question
      };
}

export function selectedAnswer(thisAnswer, thisQuestion) {
    return selectAnswer(thisAnswer, thisQuestion);
}