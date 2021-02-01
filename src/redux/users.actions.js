export const addUsers = (users) => {
    return {
        type: "addUsers",
        payload: users
    }
}
export const readUserDetail=(userDetail)=>{
    return {
        type: "readUserDetail",
        payload: userDetail
    }
}