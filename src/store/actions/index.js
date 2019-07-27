import { SAVE_USER } from './ActionTypes'

export const saveUserInfo = (user) => ({
  type: SAVE_USER,
  user
})
