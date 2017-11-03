'use strict';

var mongoose = require('mongoose'),
    db = require('../config/db'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    contact: { type: String },
    email: { type: String },
    type: { type: String },
    password: { type: String },
    location: { type: String }
});

UserSchema.statics = {

    /**
      findOneuser. return the one user object.
      @param id: get id to find one user by id.
      @param callback: callback of this form.
    */
    get: function (query, callback) {
        this.findOne(query, callback);
    },

    findByEmail: function (query, callback) {
        this.findOne({ 'email': query }, callback);
    },
    /**
      finduser. return the user objects.
      @param callback: callback of this form.
    */
    getAll: function (query, callback) {
        this.find(query, callback);
    },

    /**
      updateuser. return the create user object result.
      @param updateData: updateData is use to update user w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function (id, updateData, callback) {
        this.update(id, { $set: updateData }, callback);
    },

    updateByEmail: function (email, updateData, callback) {
        this.findOneAndUpdate({ email: email }, { $set: updateData }, callback);
    },

    remove: function (removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function (data, callback) {
        var user = new this(data);
        user.save(callback);
    }
}

var user = mongoose.model('user', UserSchema);

/** export schema */
module.exports = {
    User: user
};