const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pdfSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    file: { type: Buffer, required: true }
});

module.exports=mongoose.model('acta', pdfSchema);