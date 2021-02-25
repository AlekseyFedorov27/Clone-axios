import Instance from "./instance";

function getErrorData(xhr) {
  return {
    status: xhr.status,
    url: xhr.responseURL,
    statusText: xhr.statusText,
  };
}

const xhrAdapter = function (url, config) {
  console.log('config', config)
  return new Promise((res, rej) => {    
    const xhr = new XMLHttpRequest();
    console.log('Instance', Instance)

    let urlFull = Instance.baseURL ? Instance.baseURL + url : url;

    xhr.open(config.method, urlFull);
    
    if (Instance.headers) {
      Object.entries(Instance.headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });
    }
    xhr.addEventListener("load", () => {
      if (xhr.status >= 400) {
        rej(getErrorData(xhr));
      }
      res(JSON.parse(xhr.responseText));
    });

    xhr.addEventListener("error", () => {
      rej(getErrorData(xhr));
    });

    if(config.method !=="get"){
      xhr.send(JSON.stringify(config.payload));
    }else{
      xhr.send();
    }
    
  });
};

export default xhrAdapter;
