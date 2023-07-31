const del = require('del');
const path = require('../config/path.js');

function clear() {
    return del(path.root)
}

module.exports = clear;