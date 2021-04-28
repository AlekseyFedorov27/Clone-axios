import request from "./modules/fetchGet";
import requestSendData from "./modules/fetchSend";
import instance from "./modules/instance";
import InterceptorManager from './modules/interceptors'

function Axios() {
 

  this.interceptors = {
    request: new InterceptorManager(),
  }
}

Axios.prototype.request = function (url, config) {
  this.interceptors.request.handlers.forEach(interceptor => {
    interceptor(config)
  })

  return request(url, config)
}

const availableMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']

availableMethods.forEach(method => {
  Axios.prototype[method.toLocaleLowerCase()] = function (url, config) {
    return this.request(url, {...config, method})
  }
})


export default Axios;
