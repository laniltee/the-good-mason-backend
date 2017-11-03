'use strict';

var mongoose = require('mongoose'),
    db = require('../config/db'),
    Schema = mongoose.Schema;

var ProviderSchema = new Schema({
    name: { type: String },
    contact: { type: String },
    location: { type: String },
    address: { type: String },
    recommends: { type: Number },
    reports: { type: Number },
    service: { type: String },
    unit: { type: String },
    rate: { type: Number },
});

ProviderSchema.statics = {

    /**
      findOneprovider. return the one provider object.
      @param id: get id to find one provider by id.
      @param callback: callback of this form.
    */
    get: function (query, callback) {
        this.findOne(query, callback);
    },
    /**
      findprovider. return the provider objects.
      @param callback: callback of this form.
    */
    getAll: function (query, callback) {
        this.find(query, callback);
    },

    findByService: function (query, callback) {
        this.find({ 'service': query }, callback);
    },

    /**
      updateprovider. return the create provider object result.
      @param updateData: updateData is use to update provider w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function (id, updateData, callback) {
        this.update(id, { $set: updateData }, callback);
    },
    remove: function (removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function (data, callback) {
        var provider = new this(data);
        provider.save(callback);
    },
    searchByName: function (query, callback) {
        this.find({ 'name': { $regex: new RegExp(query, "ig") } }, callback);
    },
    searchByLocation: function (query, callback) {
        this.find({ 'location': { $regex: new RegExp(query, "ig") } }, callback);
    },
    getCategories: function (callback) {
        this.find().distinct('service', callback);
    }
}

var provider = mongoose.model('provider', ProviderSchema);

/** export schema */
module.exports = {
    Provider: provider
};