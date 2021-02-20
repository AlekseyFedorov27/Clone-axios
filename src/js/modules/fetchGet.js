import Instance from './instance'
import interceptors from './interceptors'

function RequestData() {
    this.send=(method, url, )=>{

      // if( typeof(interceptors.request.use() == 'function') ){

      //   interceptors.request.use();

      //   console.log(interceptors.request.use(23) , 'eeeeeeeeeee')
      // } 

        

        const promise = new Promise(function (resolve, reject) {

            const xhr = new XMLHttpRequest();

            let urlTrue = Instance.baseURL ? Instance.baseURL + url : url;

     
            xhr.open(method, urlTrue, true);

            let [content, type] = `'Content-type', 'application/json; charset=utf-8'`.split(',');

            if ( Instance.headers ) {  [content, type] = [Instance.headers.content, Instance.headers.type] }
            
            xhr.setRequestHeader(content, type); 

     
            xhr.addEventListener("load", () => {
              resolve(JSON.parse(xhr.responseText));
            });
      
            xhr.addEventListener("error", () => {
      
              let error = {
                  status: xhr.status,
                  url:xhr.responseURL,
                  statusText: xhr.statusText
              }
              reject(error);

            });
            
            xhr.send();
            
          });
      
          return promise;
    }

}
const requestData = new RequestData();

export default requestData;