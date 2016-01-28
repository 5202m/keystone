/*!
 * Module dependencies.
 */

var _ = require('underscore'),
	keystone = require('../../../'),
	util = require('util'),
	cloudinary = require('cloudinary'),
	utils = require('keystone-utils'),
	super_ = require('../Type'),
	async = require('async');

/**
 * CloudinaryImages FieldType Constructor
 * @extends Field
 * @api public
 */

function viewimages(list, path, options) {

	this._underscoreMethods = ['format'];
	this._fixedSize = 'full';
	this._properties = ['select', 'selectPrefix', 'autoCleanup', 'publicID', 'folder', 'filenameAsPublicID'];

	viewimages.super_.call(this, list, path, options);

}

/*!
 * Inherit from Field
 */

util.inherits(viewimages, super_);


/**
 * Registers the field on the List's Mongoose Schema.
 *
 * @api public
 */

viewimages.prototype.addToSchema = function() {

	var mongoose = keystone.mongoose;

	var field = this,
		schema = this.list.schema;

	this.paths = {
		src:        field.options.showUrl,
		width:      field.options.width,
		height:     field.options.height,
		isread:     field.options.read
	};

	var ImageSchema = new mongoose.Schema({
		_id:		String,
		name:		String
	});

};

/*!
 * Export class
 */

exports = module.exports = viewimages;
