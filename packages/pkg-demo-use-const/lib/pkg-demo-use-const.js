'use strict';

const CONST = require('lerna-test-pkg-const');

module.exports = pkgDemoUseConst;

function pkgDemoUseConst() {
    console.log('pkg-demo-use-const', CONST);
}
