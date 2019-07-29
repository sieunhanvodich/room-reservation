import { SAVE_USER } from './ActionTypes'

export const saveUserInfo = (user) => {
  console.log('userrrr', user)
  return {
    type: SAVE_USER,
    user
  }
}
