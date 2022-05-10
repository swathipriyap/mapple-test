import { API_URL } from './Const';
import axios from 'axios';

export function callService(uri, method = 'get') {
   
    return new Promise((resolve, reject) => {
        let axiosInp = {
            method: method,
            url : API_URL + uri,
        }
       
        axios(axiosInp)
            .then((resp) => {
                resolve(resp.data)
            })
            .catch((error) => {
                reject(error)
            });
    })

}