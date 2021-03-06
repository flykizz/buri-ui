"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const fs_1 = require("fs");
const path_1 = require("path");
const common_1 = require("../common");
const constant_1 = require("./constant");
function getCssLang() {
    const buriConfig = common_1.getBuriConfig();
    const preprocessor = lodash_1.get(buriConfig, 'build.css.preprocessor', 'less');
    if (preprocessor === 'sass') {
        return 'scss';
    }
    return preprocessor;
}
exports.CSS_LANG = getCssLang();
function getCssBaseFile() {
    const buriConfig = common_1.getBuriConfig();
    let path = path_1.join(constant_1.STYLE_DIR, `base.${exports.CSS_LANG}`);
    const baseFile = lodash_1.get(buriConfig, 'build.css.base', '');
    if (baseFile) {
        path = path_1.isAbsolute(baseFile) ? baseFile : path_1.join(constant_1.SRC_DIR, baseFile);
    }
    if (fs_1.existsSync(path)) {
        return path;
    }
    return null;
}
exports.getCssBaseFile = getCssBaseFile;
const IMPORT_STYLE_RE = /import\s+?(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;
// "import 'a.less';" => "import 'a.css';"
function replaceCssImport(code) {
    return code.replace(IMPORT_STYLE_RE, str => str.replace(`.${exports.CSS_LANG}`, '.css'));
}
exports.replaceCssImport = replaceCssImport;
