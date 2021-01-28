const initialState={allUsers:null};

const usersReducer=(state=initialState,action)=>{
switch (action.type) {
    case "addUsers":
        return {
            ...state,
            allUsers:action.payload
        };
     default:
        return state;
}
}
export default usersReducer;