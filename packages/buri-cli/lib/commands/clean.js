"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const constant_1 = require("../common/constant");
async function clean() {
    await Promise.all([
        fs_extra_1.emptyDir(constant_1.ES_DIR),
        fs_extra_1.emptyDir(constant_1.LIB_DIR),
        fs_extra_1.emptyDir(constant_1.DIST_DIR),
        fs_extra_1.emptyDir(constant_1.SITE_DIST_DIR)
    ]);
}
exports.clean = clean;
