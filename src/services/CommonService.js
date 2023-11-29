import axios from "axios";
import appConfig from "../config/app.config";

/*
req ex) {collectionPath: isSprint?'UserSpr':'User', error:{stack:err.stack}, payload:values}
* */
export const api_addErrLog = async (req) => {
    return await axios.post(appConfig.apiPreUrl + '/Common/Error/addErrLog',req)
};
export const api_download = async (req, config) => {
    return await axios.post(appConfig.apiPreUrl + '/Common/download',req, config)
};