import Instance from './instance'

function RequestData() {
    this.send=(method, url, payload)=>{

        const promise = new Promise(function (resolve, reject) {

            const data = JSON.stringify({payload})

            const xhr = new XMLHttpRequest();

            let urlTrue = Instance.baseURL ? Instance.baseURL + url : url;


            let [content, type] = `'Content-type', 'application/json; charset=utf-8'`.split(',');

            if ( Instance.headers ) {  [content, type] = [Instance.headers.content, Instance.headers.type] }
  
            xhr.open(method, urlTrue, true);

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
              console.error("Error", xhr)
            });
            
            xhr.send(data);
            // console.error(xhr, 'jjjjjjjjjj')
          });
      
          return promise;
    }

}
const requestData = new RequestData();

export default requestData;