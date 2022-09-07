const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comment: { type: String }
}, {
  timestamps: true,
  versionKey: false
})