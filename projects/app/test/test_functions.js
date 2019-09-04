const axios = require("axios");

const BASE_URL = "http://localhost:8000";
const LEADS_URL = `${BASE_URL}/api/leads/`;
const DOES_NOT_EXIST_URL = `${BASE_URL}/api/doesNotExist/`;

export const testAxios = async () => {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

export const test404Error = async () => {
  try {
    const result = await axios.get(DOES_NOT_EXIST_URL);
    return result;
  } catch (error) {
    return error;
  }
};

export const getAllLeadsFromAPI = async () => {
  try {
    const result = await axios.get(LEADS_URL);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const postLeadToServer = async payload => {
  try {
    const lead = await axios.post(LEADS_URL, payload);
    return lead;
  } catch (error) {
    return error;
  }
};


export const deleteLeadFromServer = async id => {
    try {
      const result = await axios.delete(`${LEADS_URL}${id}/`);
      return result;
    } catch (error) {
      return error;
    }
  };