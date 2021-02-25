import request from "./request";
import instance from "./instance";
import InterceptorManager from "./interceptors";

function Axios() {
  this.interceptors = {
    request: new InterceptorManager(),
  };
  this.create = ( baseURL, headers) => instance.set(baseURL, headers) 
}

Axios.prototype.request = function (url, config) {
  // console.log(this.interceptors)
  this.interceptors.request.handlers.forEach((interceptor) => {
    interceptor(config);
  });
  return request(url, config);
};

const availableMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

availableMethods.forEach((method) => {  
  
  if(method !=='GET'){
    Axios.prototype[method.toLocaleLowerCase()] = function (url, config={}, payload) {
      return this.request(url, { ...config, method, payload} );
    };
  }else{
    Axios.prototype[method.toLocaleLowerCase()] = function (url, config={}) {
      return this.request(url, { ...config, method });
    };
  }
});

const http = new Axios();

http.interceptors.request.use((config) => {
  return config;
});
export default http;
