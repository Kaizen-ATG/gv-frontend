import axios from "axios";

const BASE_URL="https://eumdh35gzh.execute-api.eu-west-2.amazonaws.com/";

export const getUsers = () => {
    axios
    .get(`${BASE_URL}/users`)
    .then((response) => {
        return response;
    })
    .catch(error => console.log(error));
};