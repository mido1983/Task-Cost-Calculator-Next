const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: String,
    timeHours: Number,
    timeMinutes: Number,
    hourlyRate: Number,
    discount: Number,
    cost: Number,
    free: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema); 