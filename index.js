var detect = require('is-client');
var scrollmagic = undefined;
if(detect()){
	scrollmagic = require('scrollmagic');
}
exports = module.exports = scrollmagic;