import axios from "axios";

const instance = axios.create({
  baseURL: "https://datingapp-be.herokuapp.com",
});

export default instance;
