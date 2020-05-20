'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'test': path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
};
