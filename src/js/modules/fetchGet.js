import Instance from './instance'
import interceptors from './interceptors'

function getErrorData(xhr) {
    return {
        status: xhr.status,
        url:xhr.responseURL,
        statusText: xhr.statusText
    }
}

const xhrAdapter = function (url, config) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        let urlTrue = Instance.baseURL ? Instance.baseURL + url : url;

        xhr.open(config.method, urlTrue);

        if (config.headers) {
            Object.entries(config.headers).forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            })
        }

        xhr.addEventListener("load", () => {
            if (xhr.status >= 400) {
                rej(getErrorData(xhr))
            }
            res(JSON.parse(xhr.responseText));
        });

        xhr.addEventListener("error", () => {
            rej(getErrorData(xhr))
        });

        xhr.send();
    })
}

export default xhrAdapter;
