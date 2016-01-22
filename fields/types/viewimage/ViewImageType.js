var FieldType = require('../Type');
var TextType = require('../text/TextType');
var util = require('util');
var utils = require('keystone-utils');
var keystone = require('../../../');

/**
 * Text FieldType Constructor
 * @extends Field
 * @api public
 */
function viewimage(list, path, options) {
	this._nativeType = String;
	this.height = options.height || 90;
	this._properties = ['height'];
	viewimage.super_.call(this, list, path, options);
}
util.inherits(viewimage, FieldType);

/* Inherit from TextType prototype */
viewimage.prototype.addFilterToQuery = TextType.prototype.addFilterToQuery;

viewimage.prototype.addToSchema = function() {

	var field = this;
	
	this.paths = {
		src:        field.options.showUrl,
		isread:     field.options.read
	};
};

/* Export Field Type */
exports = module.exports = viewimage;
