import axios from "axios";

const BASE_URL = "https://2y4epjc4bh.execute-api.eu-west-2.amazonaws.com";
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

export const saveUser = async (name, useremail) => {
  try {
    console.log("Trying save user");
    const postData = {
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

export const getUser = async (email) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/users/${email}/user`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const addUserPoints = (request) => {
  try {
    const { postData } = axios.post(`${BASE_URL}/saveuserpoints`, request);
    return postData;
  } catch (error) {
    console.log(error);
  }
};
