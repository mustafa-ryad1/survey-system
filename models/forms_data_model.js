const mongoose = require('mongoose');

var dataFormSchema = new mongoose.Schema({
    user_id : {type: String},
    form_id : {type: String},
    form_title:{type: String},
    report_title:{type:String},
    form_fields : [mongoose.Schema.Types.Mixed]
}, {strict: false, timestamps: true});

const DataForm = mongoose.model('DataForm', dataFormSchema, 'survey_form_data');
module.exports = DataForm;