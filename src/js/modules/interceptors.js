function Interceptors() {

    this.request = {
        use: function (params) {
            console.log(params)
            return params
        }
    }

  
}
  
const interceptors = new Interceptors();
  
export default interceptors;