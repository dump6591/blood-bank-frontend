import axios from "axios";

const baseURL = "https://blood-bank-backend-rlay.onrender.com/";

export default axios.create({ baseURL: baseURL });
