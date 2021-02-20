import requestGetData from "./modules/fetchGet";
import requestSendData from "./modules/fetchSend";
import instance from "./modules/instance";
import interceptors from './modules/interceptors'

function Methods() {

  this.get = (url) => { return requestGetData.send("get", url) }

  this.post = (url, payload = {}) => { return requestSendData.send("post", url, payload) }

  this.put = (url, payload = {}) => { return requestSendData.send("put", url, payload) }

  this.delete = (url, payload = {}) => { return requestSendData.send("delete", url, payload) }

  this.patch = (url, payload = {}) => { return requestSendData.send("patch", url, payload) }

  this.create = ( baseURL, headers) => { return instance.set(baseURL, headers) }

  this.interceptors = (fn) => { return interceptors.request.use(fn) }

}

const methods = new Methods();

export default methods;
