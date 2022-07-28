import axios from "axios"

const apiInstance = axios.create({
  baseURL: "http://extratoblubeapp-env.eba-mvegshhd.sa-east-1.elasticbeanstalk.com"
});

export default apiInstance;

//Login url: http://extratoblubeapp-env.eba-mvegshhd.sa-east-1.elasticbeanstalk.com/login
//Benefits url: http://extratoblubeapp-env.eba-mvegshhd.sa-east-1.elasticbeanstalk.com/offline/listagem/{{document}}