function Instance() {
  this.baseURL=''
  this.headers=''

  this.set = ({baseURL = "", headers = ''}) => {
    this.baseURL = baseURL
    this.headers = headers
    return {
        baseURL,
        headers
    };
  };
 
}

const instanceAxios = new Instance();

export default instanceAxios;
