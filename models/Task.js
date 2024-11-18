const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
});

module.exports = mongoose.model('Task', TaskSchema);
