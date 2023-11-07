import axios from "axios";
const api = axios.create({ baseURL: 'http://192.168.0.253:3100/' });

export {api};