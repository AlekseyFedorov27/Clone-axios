import Axios from "./modules/Axios";

const defaults = {}

function createInstance(config) {}

const axios = createInstance(defaults)

axios.create = function (config) {
    return createInstance({...defaults, ...config})
}

export default axios
