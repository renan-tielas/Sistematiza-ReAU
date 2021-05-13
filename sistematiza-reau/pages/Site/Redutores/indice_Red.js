import { combineReducers } from 'redux'
import Redutor from './Redutor'

// The state handled by `Redutor` will be stored with the property name `game` on the Redux store.
const redutores = combinaRedutores({
  game: Redutor
})

export default redutores