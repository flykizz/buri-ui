"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
// @ts-ignore
const webpackbar_1 = __importDefault(require("webpackbar"));
const lodash_1 = require("lodash");
const path_1 = require("path");
const webpack_base_1 = require("./webpack.base");
const common_1 = require("../common");
const buri_cli_site_plugin_1 = require("../compiler/buri-cli-site-plugin");
const constant_1 = require("../common/constant");
const buriConfig = common_1.getBuriConfig();
const baiduAnalytics = lodash_1.get(buriConfig, 'site.baiduAnalytics');
function getSiteConfig() {
    const siteConfig = buriConfig.site;
    if (siteConfig.locales) {
        return siteConfig.locales[siteConfig.defaultLang || 'en-US'];
    }
    return siteConfig;
}
function getTitle(config) {
    let { title } = config;
    if (config.description) {
        title += ` - ${config.description}`;
    }
    return title;
}
const siteConfig = getSiteConfig();
const title = getTitle(siteConfig);
exports.siteDevBaseConfig = webpack_merge_1.default(webpack_base_1.baseConfig, {
    entry: {
        'site-desktop': [path_1.join(__dirname, '../../site/desktop/main.js')],
        'site-mobile': [path_1.join(__dirname, '../../site/mobile/main.js')]
    },
    devServer: {
        port: 8080,
        quiet: true,
        host: '0.0.0.0',
        stats: 'errors-only',
        publicPath: '/',
        disableHostCheck: true
    },
    resolve: {
        alias: {
            'site-mobile-shared': constant_1.SITE_MODILE_SHARED_FILE,
            'site-desktop-shared': constant_1.SITE_DESKTOP_SHARED_FILE
        }
    },
    output: {
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                chunks: {
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0,
                    name: 'chunks'
                }
            }
        }
    },
    plugins: [
        new webpackbar_1.default({
            name: 'Buri Cli',
            color: constant_1.GREEN
        }),
        new buri_cli_site_plugin_1.BuriCliSitePlugin(),
        new html_webpack_plugin_1.default({
            title,
            logo: siteConfig.logo,
            description: siteConfig.description,
            chunks: ['chunks', 'site-desktop'],
            template: path_1.join(__dirname, '../../site/desktop/index.html'),
            filename: 'index.html',
            baiduAnalytics
        }),
        new html_webpack_plugin_1.default({
            title,
            logo: siteConfig.logo,
            description: siteConfig.description,
            chunks: ['chunks', 'site-mobile'],
            template: path_1.join(__dirname, '../../site/mobile/index.html'),
            filename: 'mobile.html',
            baiduAnalytics
        })
    ]
});
exports.siteDevConfig = webpack_merge_1.default(exports.siteDevBaseConfig, common_1.getWebpackConfig());
