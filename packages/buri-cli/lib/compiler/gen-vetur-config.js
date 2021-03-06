"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const markdown_vetur_1 = __importDefault(require("@buri-ui/markdown-vetur"));
const path_1 = require("path");
const lodash_1 = require("lodash");
const constant_1 = require("../common/constant");
// generate vetur tags & attributes
function genVeturConfig() {
    const buriCongig = constant_1.getBuriConfig();
    const options = lodash_1.get(buriCongig, 'build.vetur');
    if (options) {
        markdown_vetur_1.default.parseAndWrite({
            path: constant_1.SRC_DIR,
            test: /zh-CN\.md/,
            outputDir: path_1.join(constant_1.ROOT, 'vetur'),
            ...options
        });
    }
}
exports.genVeturConfig = genVeturConfig;
