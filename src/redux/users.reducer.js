const initialState = { allUsers: null, admin: false };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addUsers":
      return {
        ...state,
        allUsers: action.payload,
      };
    case "isAdmin":
      return {
        ...state,
        admin: action.payload,
      };

    default:
      return state;
  }
};
export default usersReducer;
