import * as actionType from '../action/type'
import { manageState } from '../../utilities'

const intializeState = {
    persons: []
}

const rootReducer = (state = intializeState,action) => {
    
  switch (action.type) {
    case actionType.ADD_PERSON : 
     fetch ('https://person-redux.firebaseio.com/Person.json' , 
      {
        method : 'POST',
        body : JSON.stringify({persons: state.persons.concat(action.value)}),
        headers : {'content-Type' : 'application/json'}
      })
      return manageState(state,{persons: state.persons.concat(action.value)}) 
    
    case actionType.REMOVE_PERSON :
      return manageState(state,{persons: state.persons.filter(person =>  action.value !== person.id)})  
    default : 
      return state
  }
}
export default rootReducer
