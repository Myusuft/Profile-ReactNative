import axios from "axios";

const Satelite = axios.create({
    baseURL:"https://be-rmy.dev.berijalan.co.id/rest/v1",
    timeout:10000,
    headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
export default Satelite;