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

export const readUserDetail = (userDetail) => {
  return {
    type: "readUserDetail",
    payload: userDetail,
  };
};
