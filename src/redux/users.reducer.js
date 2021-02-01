import { Switch } from "react-router-dom";

const initialState={allUsers:null};

export const usersReducer=(state=initialState,action)=>{
switch (action.type) {
    case "addUsers":
        return {
            ...state,
            allUsers:action.payload
        }
        break;

    default:
        break;
}
}