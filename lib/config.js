const VERSION = require('../package.json').version;

module.exports = function buildConfig(config) {
    var conf = {
        server: config.server,
        serverName: config.serverName || 'STOMP-JS/' + VERSION,
        path: config.path || "/stomp",
        heartbeat: config.heartbeat || [0, 0],
        heartbeatErrorMargin: config.heartbeatErrorMargin || 1000,
        debug: config.debug || function (args) {},
        protocol: config.protocol || 'ws',
        isValidConnection: config.isValidConnection,
        closeOnConnectionError: config.closeOnConnectionError
    };

    if (conf.server === undefined) {
        throw "Server is required";
    }
    return conf;
};
