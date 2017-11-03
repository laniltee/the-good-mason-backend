'use strict';

var mongoose = require('mongoose'),
    db = require('../config/db'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    name: { type: String },
    date: { type: Number },
    user: { type: String }
});