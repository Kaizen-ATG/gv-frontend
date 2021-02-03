export const addUsers = (users) => {
  return {
    type: "addUsers",
    payload: users,
  };
};
export const isAdmin = (toggleAdmin) => {
  return {
    type: "isAdmin",
    payload: toggleAdmin,
  };
};
