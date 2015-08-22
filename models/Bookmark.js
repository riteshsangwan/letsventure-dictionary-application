'use strict';

/**
 * Bookmark schema definition.
 * A Bookmark instance represent a bookmark in the system.
 * Bookmarks are collections of words, which are added by the user for easy future reference
 *
 * @author      ritesh
 * @version     1.0
 */

var mongoose = require('../datasource').getMongoose(),
  Schema = mongoose.Schema;

var BookmarkSchema = new Schema({
  word: { type: String, required: true },
  description: { type: String, required: true },
  audioUrl: { type: String, required: true },
  ipAddress: { type: String, required: true }
});

/**
 * Module exports
 */
module.exports = {
  BookmarkSchema: BookmarkSchema
};