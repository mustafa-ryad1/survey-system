const mongoose = require('mongoose');


const FormSchema = new mongoose.Schema({
    form:{
        type:Object
    },
    description:{
        type:Object
    },
    published:{
        type:Boolean,
        default: false
    },
    title:{
        type:String
    },
  
}, {
    timestamps: true
});

const Form = mongoose.model('Form', FormSchema, 'survey_forms');
module.exports = Form