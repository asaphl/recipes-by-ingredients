import Axios from "axios";
import REMOTE_SERVER from "../constants/server";

async function requestData(dataEntity) {
  return Axios.get(REMOTE_SERVER + dataEntity).then((res) => {
    return res.data;
  });
}

export default requestData;
