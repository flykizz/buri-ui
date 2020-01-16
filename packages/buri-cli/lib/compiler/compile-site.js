"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const address_1 = __importDefault(require("address"));
const webpack_1 = __importDefault(require("webpack"));
const webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
const lodash_1 = require("lodash");
const portfinder_1 = require("portfinder");
const constant_1 = require("../common/constant");
const webpack_site_dev_1 = require("../config/webpack.site.dev");
const webpack_site_prd_1 = require("../config/webpack.site.prd");
function logServerInfo(port) {
    const local = `http://localhost:${port}/`;
    const network = `http://${address_1.default.ip()}:${port}/`;
    console.log('\n  Site running at:\n');
    console.log(`  ${chalk_1.default.bold('Local')}:    ${chalk_1.default.hex(constant_1.GREEN)(local)} `);
    console.log(`  ${chalk_1.default.bold('Network')}:  ${chalk_1.default.hex(constant_1.GREEN)(network)}`);
}
function runDevServer(port) {
    const server = new webpack_dev_server_1.default(webpack_1.default(webpack_site_dev_1.siteDevConfig), webpack_site_dev_1.siteDevConfig.devServer);
    // this is a hack to disable wds status log
    server.showStatus = function () { };
    const host = lodash_1.get(webpack_site_dev_1.siteDevConfig.devServer, 'host', 'localhost');
    server.listen(port, host, (err) => {
        if (err) {
            console.log(err);
        }
    });
}
function watch() {
    portfinder_1.getPort({
        port: webpack_site_dev_1.siteDevConfig.devServer.port
    }, (err, port) => {
        if (err) {
            console.log(err);
            return;
        }
        logServerInfo(port);
        runDevServer(port);
    });
}
function build() {
    return new Promise((resolve, reject) => {
        webpack_1.default(webpack_site_prd_1.sitePrdConfig, (err, stats) => {
            if (err || stats.hasErrors()) {
                reject();
            }
            else {
                resolve();
            }
        });
    });
}
async function compileSite(production = false) {
    if (production) {
        await build();
    }
    else {
        watch();
    }
}
exports.compileSite = compileSite;
