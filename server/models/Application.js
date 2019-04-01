const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    instruments: [{ type: mongoose.Schema.Types.String }],
    content: { type: mongoose.Schema.Types.String },
    status: { type: mongoose.Schema.Types.String, default: 'Pending'}
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;