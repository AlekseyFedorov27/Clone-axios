function InterceptorManager() {
    this.handlers = [];
}

InterceptorManager.prototype.use = function use(fn) {
    this.handlers.push(fn);
    console.log(fn)
    return this.handlers;
};

export default InterceptorManager;