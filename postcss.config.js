const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssnested = require('postcss-nested');

module.exports = {
    plugins: [
        postcssnested,
        autoprefixer,
        cssnano({ preset: 'default' })
    ]
};