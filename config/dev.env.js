'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"https://www.easy-mock.com/mock/5ce4ad2013adff7dfe2a7864/mark"'
})
