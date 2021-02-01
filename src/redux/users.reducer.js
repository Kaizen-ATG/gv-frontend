const initialState = { allUsers: null, userDetail: null };

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addUsers":
            return {
                ...state,
                allUsers: action.payload
            };
        case "readUserDetail":
            return {
                ...state,
                userDetail: action.payload
            };
        default:
            return state;
    }
}
export default usersReducer;