export const CHANGE_CATEGORY = 'QUESTION/CHANGE_CATEGORY';
export const CHANGE_DIFFICULTY = 'QUESTION/CHANGE_DIFFICULTY';
export const CHANGE_TYPE = 'QUESTION/CHANGE_TYPE';
export const CHANGE_AMOUNT = 'QUESTION/CHANGE_AMOUNT';
export const CHANGE_SCORE = 'QUESTION/CHANGE_SCORE';

export const handleChangeCategory = payload => ({
  type: CHANGE_CATEGORY,
  payload
})

export const handleChangeDifficulty = payload => ({
  type: CHANGE_DIFFICULTY,
  payload
})

export const handleChangeType = payload => ({
  type: CHANGE_TYPE,
  payload
})

export const handleChangeAmount = payload => ({
  type: CHANGE_AMOUNT,
  payload
})

export const handleChangeScore = payload => ({
  type: CHANGE_SCORE,
  payload
})