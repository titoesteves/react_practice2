require('babel/register')
var getConfig = require('hjs-webpack')
var React = require('react')
var PublicPage = require('./src/pages/public')
var Layout = require('./src/layout')

module.exports = getConfig({
	in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true
})
