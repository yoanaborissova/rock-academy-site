const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true, unique: true},
    description: { type: mongoose.Schema.Types.String, default: 'No information added.' },
    imageUrl: { type: mongoose.Schema.Types.String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;