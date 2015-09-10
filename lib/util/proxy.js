var Proxy = function() {
  this.restoreFrom = {};
  return this;
}

Proxy.prototype.set = function (config) {
  // Override environment defaults if proxy config options are set
  // This will make requests.js follow the proxies in config
  if (Object.prototype.hasOwnProperty.call(config, 'no_proxy')) {
    this.restoreFrom.NO_PROXY = process.env.NO_PROXY;
    process.env.NO_PROXY = config.no_proxy;
    delete process.env.no_proxy;
  }
  if (Object.prototype.hasOwnProperty.call(config, 'proxy')) {
    this.restoreFrom.HTTP_PROXY = process.env.HTTP_PROXY;
    process.env.HTTP_PROXY = config.proxy;
    delete process.env.http_proxy;
  }
  if (Object.prototype.hasOwnProperty.call(config, 'httpsProxy')) {
    this.restoreFrom.HTTPS_PROXY = process.env.HTTPS_PROXY;
    process.env.HTTPS_PROXY = config.httpsProxy;
    delete process.env.https_proxy;
  }
};

Proxy.prototype.restore = function () {
  // Reset upercase proxy variables
  if (Object.prototype.hasOwnProperty.call(config, 'no_proxy')) {
    process.env.NO_PROXY = this.restoreFrom.NO_PROXY;
  }
  if (Object.prototype.hasOwnProperty.call(config, 'proxy')) {
    process.env.HTTP_PROXY = this.restoreFrom.HTTP_PROXY;
  }
  if (Object.prototype.hasOwnProperty.call(config, 'httpsProxy')) {
    process.env.HTTPS_PROXY = this.restoreFrom.HTTPS_PROXY;
  }
};

module.exports = new Proxy();
