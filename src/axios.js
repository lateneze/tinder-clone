import axios from "axios";

const instance = axios.create({
  baseURL: "https://eze-tinder-clone.herokuapp.com/",
});

export default instance;
