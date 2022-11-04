import { CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_TYPE, CHANGE_AMOUNT, CHANGE_SCORE } from "./actions";


const initialState = {
  question_category: '',
  question_difficulty: '',
  question_type: '',
  amount_of_question: 5,
  score: 0
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case CHANGE_CATEGORY: {
      return {
        ...state,
        question_category: payload
      }
    }
    case CHANGE_DIFFICULTY: {
      return {
        ...state,
        question_difficulty: payload
      }
    }
    case CHANGE_TYPE: {
      return {
        ...state,
        question_type: payload
      }
    }
    case CHANGE_AMOUNT: {
      return {
        ...state,
        amount_of_question: payload
      }
    }
    case CHANGE_SCORE: {
      return {
        ...state,
        score: payload
      }
    }
    default:
      return state;

  }
}

export default reducer;