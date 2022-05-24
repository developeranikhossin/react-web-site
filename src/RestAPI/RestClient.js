import axios from 'axios';

class RestClient {

    static GetRequest(GetUrl){
        return axios.get(GetUrl).then(response=>{
            return response.data
        }).catch(error=>{
            return null;
        });
    }


}

export default RestClient;