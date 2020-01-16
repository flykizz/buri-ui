"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const lodash_1 = require("lodash");
const common_1 = require("../common");
const webpack_site_dev_1 = require("./webpack.site.dev");
const constant_1 = require("../common/constant");
const buriConfig = common_1.getBuritConfig();
const outputDir = lodash_1.get(buriConfig, 'build.site.outputDir', constant_1.SITE_DIST_DIR);
const publicPath = lodash_1.get(buriConfig, 'build.site.publicPath', '/');
exports.sitePrdConfig = webpack_merge_1.default(webpack_site_dev_1.siteDevBaseConfig, {
    mode: 'production',
    stats: 'none',
    output: {
        publicPath,
        path: outputDir,
        filename: '[name].[hash:8].js',
        chunkFilename: 'async_[name].[chunkhash:8].js'
    }
}, common_1.getWebpackConfig());
