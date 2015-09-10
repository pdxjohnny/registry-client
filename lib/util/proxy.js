var Proxy = function() {
  this.restoreFrom = {};
  return this;
}

Proxy.prototype.set = function (config) {
  // Override environment defaults if proxy config options are set
  // This will make requests.js follow the proxies in config
  if (Object.prototype.hasOwnProperty.call(config, 'no_proxy')) {
    this.restoreFrom.NO_PROXY = process.env.NO_PROXY;
    this.restoreFrom.no_proxy = process.env.no_proxy;
    process.env.NO_PROXY = config.no_proxy;
    process.env.no_proxy = config.no_proxy;
  }
  if (Object.prototype.hasOwnProperty.call(config, 'proxy')) {
    this.restoreFrom.HTTP_PROXY = process.env.HTTP_PROXY;
    this.restoreFrom.http_proxy = process.env.http_proxy;
    process.env.HTTP_PROXY = config.proxy;
    process.env.http_proxy = config.proxy;
  }
  if (Object.prototype.hasOwnProperty.call(config, 'httpsProxy')) {
    this.restoreFrom.HTTPS_PROXY = process.env.HTTPS_PROXY;
    this.restoreFrom.https_proxy = process.env.https_proxy;
    process.env.HTTPS_PROXY = config.httpsProxy;
    process.env.https_proxy = config.httpsProxy;
  }
};

Proxy.prototype.restore = function () {
  // Reset upercase proxy variables
  process.env.NO_PROXY = this.restoreFrom.NO_PROXY;
  process.env.HTTP_PROXY = this.restoreFrom.HTTP_PROXY;
  process.env.HTTPS_PROXY = this.restoreFrom.HTTPS_PROXY;
  // Reset lowercase proxy variables
  process.env.no_proxy = this.restoreFrom.no_proxy;
  process.env.http_proxy = this.restoreFrom.http_proxy;
  process.env.https_proxy = this.restoreFrom.https_proxy;
};

module.exports = new Proxy();
