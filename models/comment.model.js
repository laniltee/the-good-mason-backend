'use strict';

var mongoose = require('mongoose'),
    db = require('../config/db'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    rating: { type: String },
    user: { type: String },
    provider: { type: String },
    comment: { type: String },
    date: { type: Number }
});

CommentSchema.statics = {

    /**
      findOnefeedback. return the one feedback object.
      @param id: get id to find one feedback by id.
      @param callback: callback of this form.
    */
    get: function (query, callback) {
        this.findOne(query, callback);
    },
    /**
      findfeedback. return the feedback objects.
      @param callback: callback of this form.
    */
    getAll: function (query, callback) {
        this.find(query, callback);
    },

    /**
      updatefeedback. return the create feedback object result.
      @param updateData: updateData is use to update feedback w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function (id, updateData, callback) {
        this.update(id, { $set: updateData }, callback);
    },
    remove: function (removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function (data, callback) {
        var feedback = new this(data);
        feedback.save(callback);
    },
    findByProvider: function (query, callback) {
        this.find({ 'provider': query }, callback);
    },
    findByEmail: function (query, callback) {
        this.find({ 'user': query }, callback);
    }
}

var comment = mongoose.model('comment', CommentSchema);

/** export schema */
module.exports = {
    Comment: comment
};
