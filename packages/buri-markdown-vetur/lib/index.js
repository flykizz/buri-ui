"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const md_parser_1 = require("./md-parser");
const codegen_1 = require("./codegen");
const fs_1 = require("fs");
function parseText(input) {
    const ast = md_parser_1.mdParser(input);
    return codegen_1.codegen(ast);
}
exports.parseText = parseText;
const defaultOptions = {
    maxDeep: Infinity,
    tagPrefix: ''
};
function parse(options) {
    options = {
        ...defaultOptions,
        ...options
    };
    const result = {
        tags: {},
        attributes: {}
    };
    function putResult(componentName, component) {
        componentName = options.tagPrefix + componentName;
        const attributes = Object.keys(component.attributes);
        const tag = {
            description: component.description,
            attributes
        };
        result.tags[componentName] = tag;
        attributes.forEach(key => {
            result.attributes[`${componentName}/${key}`] = component.attributes[key];
        });
    }
    function recursiveParse(options, deep) {
        if (options.maxDeep && deep > options.maxDeep) {
            return;
        }
        deep++;
        const files = fs_1.readdirSync(options.path);
        files.forEach(item => {
            const currentPath = path_1.join(options.path.toString(), item);
            const stats = fs_1.statSync(currentPath);
            if (stats.isDirectory()) {
                recursiveParse({
                    ...options,
                    path: currentPath
                }, deep);
            }
            else if (stats.isFile() && options.test.test(item)) {
                const file = fs_1.readFileSync(currentPath);
                const tags = parseText(file.toString());
                if (tags.default) {
                    // one tag
                    putResult(currentPath.split('/').slice(-2)[0], tags.default);
                }
                else {
                    Object.keys(tags).forEach(key => {
                        putResult(key, tags[key]);
                    });
                }
            }
        });
    }
    recursiveParse(options, 0);
    return result;
}
exports.parse = parse;
function parseAndWrite(options) {
    const { tags, attributes } = parse(options);
    if (!options.outputDir) {
        return;
    }
    const isExist = fs_1.existsSync(options.outputDir);
    if (!isExist) {
        fs_1.mkdirSync(options.outputDir);
    }
    fs_1.writeFileSync(path_1.join(options.outputDir, 'tags.json'), JSON.stringify(tags, null, 2));
    fs_1.writeFileSync(path_1.join(options.outputDir, 'attributes.json'), JSON.stringify(attributes, null, 2));
}
exports.parseAndWrite = parseAndWrite;
exports.default = {
    parse,
    parseText,
    parseAndWrite
};
