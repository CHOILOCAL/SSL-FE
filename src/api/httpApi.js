import axios from 'axios';
import { GET, PUT, POST, DELETE } from '../config/contant';

const httpApi = (method, url, data) => {
    switch (method) {
        case GET:
            axios({
                method: method,
                url: url + (data ? data : ''),
            })
                .then(function (response) {
                    // 성공
                    console.log(response);
                    console.log(`get success`);
                })
                .catch(function (error) {
                    // 실패
                    console.log(`error`);
                })
                .then(function () {
                    // ...default
                });
            break;
        case POST:
            axios({
                method: method,
                url: url,
                data: data,
            })
                .then(function (response) {
                    // 성공
                    console.log(response);
                    console.log(`post success`);
                })
                .catch(function (error) {
                    // 실패
                    console.log(`error`);
                })
                .then(function () {
                    // ...default
                });
            break;
        case PUT:
            axios({
                method: method,
                url: url,
                data: data
            })
                .then(function (response) {
                    // 성공
                    console.log(response);
                    console.log(`put success`);
                })
                .catch(function (error) {
                    // 실패
                    console.log(`error`);
                })
                .then(function () {
                    // ...default
                });
            break;
        case DELETE:
            axios({
                method: method,
                url: url + (data ? data : ''),
            })
                .then(function (response) {
                    // 성공
                    console.log(response);
                    console.log(`delete success`);
                })
                .catch(function (error) {
                    // 실패
                    console.log(`error`);
                })
                .then(function () {
                    // ...default
                });
            break;
        default:
    }
};

export default httpApi;
