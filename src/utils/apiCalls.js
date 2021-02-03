import axios from "axios";

const BASE_URL = "https://eumdh35gzh.execute-api.eu-west-2.amazonaws.com";
export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getOffers = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/redeemoffers`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saveUser = async (id, useremail, name) => {
  try {
    console.log("Trying save user");
    const postData = {
      userid: id,
      username: name,
      email: useremail,
    };
    console.log(postData);
    const { data } = await axios.post(`${BASE_URL}/saveuser`, postData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/users/4ec20f9f-4eec-43b8-88ce-2d7f9af7cd66/user`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const addUserPoints = (request) => {
  try {
    console.log("success");
    console.log(request);
    const { postData } = axios.post(`${BASE_URL}/saveuserpoints`, request);
    return postData;
  } catch (error) {
    console.log(error);
  }
};
