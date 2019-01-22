import axios from "axios"
const baseURL=process.env.NODE_ENV=="development" ? "http://elm.cangdu.org" : ""
axios.defaults.baseURL=baseURL
export default axios