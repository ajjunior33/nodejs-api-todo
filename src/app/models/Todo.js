const mongoose = require("mongoose");


const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  public: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
});

TodoSchema.pre('updateOne', function(next) {
  this.updatedAt = Date.now()
  next()
});
module.exports = mongoose.model("Todo", TodoSchema);
