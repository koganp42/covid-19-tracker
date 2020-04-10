import { CREATE_USER } from '../actions/types'

//makeAPI call to get all users from db, and use that as initial state?
const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    dateOfBirth: new Date(),
    sex: "female",
    lat: 0,
    long: 0,
    smoking: "never",
    preExistingConditions: "false",
    listPreExistingConditions: "",
    sick: "false",
    userID: 0
}; 

export default function(state = initialState, action){
    switch(action.type) {
        case CREATE_USER:
            return [...state, action.payload]
        default:
        return state
        
    }


}