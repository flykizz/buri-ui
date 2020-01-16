"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = __importDefault(require("webpack"));
const webpack_package_1 = require("../config/webpack.package");
async function compilePackage(isMinify) {
    return new Promise((resolve, reject) => {
        webpack_1.default(webpack_package_1.packageConfig(isMinify), (err, stats) => {
            if (err || stats.hasErrors()) {
                reject();
            }
            else {
                resolve();
            }
        });
    });
}
exports.compilePackage = compilePackage;
