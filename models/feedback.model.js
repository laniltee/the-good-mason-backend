'use strict';

var mongoose = require('mongoose'),
    db = require('../config/db'),
    Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
    rating: { type: String },
    description: { type: String },
    email: { type: String },
    createdAt: { type: Number }
});

FeedbackSchema.statics = {

    /**
      findOnefeedback. return the one feedback object.
      @param id: get id to find one feedback by id.
      @param callback: callback of this form.
    */
    get: function(query, callback) {
        this.findOne(query, callback);
    },
    /**
      findfeedback. return the feedback objects.
      @param callback: callback of this form.
    */
    getAll: function(query, callback) {
        this.find(query, callback);
    },

    /**
      updatefeedback. return the create feedback object result.
      @param updateData: updateData is use to update feedback w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function(id, updateData, callback) {
        this.update(id, { $set: updateData }, callback);
    },
    remove: function(removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function(data, callback) {
        var feedback = new this(data);
        feedback.save(callback);
    }
}

var feedback = mongoose.model('feedback', FeedbackSchema);

/** export schema */
module.exports = {
    Feedback: feedback
};