import httpProxy from "http-proxy";
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const config = require("./config.json")

if (config.ssl.enabled) {
    const sslProxy = httpProxy.createProxyServer({
        target: config.target,
        ssl: {
            key: fs.readFileSync(config.ssl.key, 'utf8'),
            cert: fs.readFileSync(config.ssl.cert, 'utf8')
        },
        localAddress: config.host
    }).listen(config.ssl.port);

    sslProxy.on('error', e => {
        console.log(`HTTPS Proxy: ${e}`);
    });
}

const proxy = httpProxy.createProxyServer({
    target: config.target,
    localAddress: config.host
}).listen(config.port);

proxy.on('error', e => {
    console.log(`HTTP Proxy: ${e}`);
});
