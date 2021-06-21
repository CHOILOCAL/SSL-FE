import React from "react";
import { Button } from 'react-bootstrap'
import httpApi from "./api/httpApi";
import {POST, GET, DELETE, PUT, API_URL_V1} from "./config/contant";

export const dummyData = {
    firstname: 'hyunji',
    lastname: 'choi'
}
class Main extends React.Component {

    callProxySetting(method, data) {
        httpApi(method, `${API_URL_V1}/test/user`, data);
    };

    render() {
        return (
            <div>
                <h6>
                    CORS TEST
                </h6>
                <Button variant="success" onClick={() => this.callProxySetting(GET, `?no=1`)}>get</Button>
                <Button variant="info" onClick={() => this.callProxySetting(POST, dummyData)}>post</Button>
                <Button variant="danger" onClick={() => this.callProxySetting(PUT, dummyData)}>put</Button>
                <Button variant="secondary" onClick={() => this.callProxySetting(DELETE, `?no=1`)}>delete</Button>
            </div>
        );
    }
}

export default Main;
