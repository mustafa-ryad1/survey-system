const Form = require("../models/forms_model")
const FormData = require("../models/forms_data_model");
const jwt = require('jsonwebtoken');
const fs = require("fs");
const  { v4: uuidv4 } = require('uuid');

const {getDirName} = require('../env');
const User = require("../models/user_model");
// const base_url = "https://survey-system001.herokuapp.com"
// const base_url = "http://localhost:5000"
const base_url = "http://surveysystem-env-1.eba-frygumpt.us-east-1.elasticbeanstalk.com"

module.exports.createForm = async(req,res)=>{
    const form = new Form({form:req.body})
    await form.save()
    res.status(201).send(form)
}

module.exports.getForms = async(req,res)=>{
    const forms = await Form.find({}, 'form.title published')
    res.status(200).send(forms)
}

module.exports.getForm = async (req, res) => {
  
  let form = null;
  try{  
       form = await Form.findOne({'_id':req.params.id,'published':true})
      //  console.log(form.form.components)
       form.form.components = form.form.components.filter(c=>{
                                  if (c.users && c.type !=='button'){
                                    // console.log(c.users);
                                    // console.log(c.users.includes('k'))
                                    return c.users.includes(req.user.username);
                                  }else{
                        
                                    return true;
                                  }});
       if(form.form.components.length<2){
         res.status(500).sned({success:false, message:"Sorry you have not access this form"})
       }
       res.send({success:true,form:form})
  }catch(err){

    res.status(404).send({sucess:false, message:"Form not found",err})
  }
};

module.exports.adminGetForm = async (req, res) => {
  let form = null;
  try{  
       form = await Form.findOne({'_id':req.params.id})
       res.send({success:true,form:form})
  }catch(err){
    res.status(404).send({sucess:false, message:"Form not found",err})
  }
};


module.exports.editForm = async (req, res) => {
  Form.findOneAndUpdate(
    {'_id':req.params.id},
    {form:req.body},
    (err, form) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: err
        });
      }
      res.send({
        success: true,
      })
    }
  )
};

module.exports.postFormData = async(req,res) => {
    data = req.body.data;
    const formData = new FormData();
    formData.form_id = req.body.form_id;
    
    for (let item in data){
        if (data[item].input_type !=="button"){

            if(typeof data[item].value ==="object"){
                let values = [];
                for (let image of data[item].value){
                    if(image?.type?.includes("image") && image?.storage === "base64"){
                        let base64Data = image.url.replace(/^data:image\/png;base64,/, "");
                        const buffer = Buffer.from(base64Data, "base64");
                        const filename = uuidv4() + ".png";
                        let image_path = getDirName + "/static/images/" + filename; 
                        fs.writeFileSync(image_path, buffer);
                        let image_url = `${base_url}/images/` + filename;
                        values.push(image_url)
                    }else if(typeof image ==="string" && image?.includes("video")){
                        let base64Data = image.replace(/^video/, "");
                        const buffer = Buffer.from(base64Data, "base64");
                        const filename = uuidv4() + ".mp4";
                        let video_path = getDirName + "/static/videos/" + filename; 
                        fs.writeFileSync(video_path, buffer);
                        let video_url = `${base_url}/videos/` + filename;
                        values.push(video_url)
                    }
                }
                formData.form_fields.push({...data[item],value:values});

            }else{

                formData.form_fields.push(data[item])
            }
         
        }
        formData.report_title = `${uuidv4().slice(0,4)}-Report-${req.body.form_title}-${req.user.username}`;
    await formData.save();  
    }

    res.status(201).send({"ok":"fine"})
}

module.exports.getFormSubmissions = async(req,res)=>{
    const submissions = await FormData.find({'form_id':req.params.form_id}, 'report_title').catch(err=>{
        res.status(404).send({sucess:false, message:"Form not found"})  
    })
    res.send({success:true,submissions})
}

module.exports.getSubmission = async(req,res)=>{
    const submission = await FormData.findOne({'_id':req.params.id}).catch(err=> 
        res.status(404).send({sucess:false, message:"submission not found"}))                       
      res.send({success:true,submission})
}

exports.deleteForm = async (req, res) => {
    const id = req.params.id;
    try {
      const form = await Form.findById(id);
    
        await Form.findByIdAndDelete({
            _id: id
          })
          .then(data => res.send({
            success: true,
            message: "Form has been deleted"
          }))
          .catch(err => res.send({
            err
          }))
    } catch (err) {
      res.status(404).send({
        success: false,
        message: "Form not found"
      })
    }
  }

module.exports.getFormsStatistics = async (req, res) => {
    // console.log("called")
    const forms_count = await Form.countDocuments({});                     
    const submissions_count = await FormData.countDocuments({});                     
    const users_count = await User.countDocuments({});                     
    res.send({success:true,forms:forms_count,
                           submissions: submissions_count,
                           users:users_count})
};

module.exports.getSubmissions = async(req,res) =>{
  const submissions = await FormData.find({}, 'report_title')
  res.status(200).send(submissions)
}

module.exports.handlePublishForm = async(req,res)=>{
  let form = await Form.findOne({'_id':req.params.form_id});
  form.published = !form.published
  form.save().then(form=>{
    res.send({success:true,published:form.published})

  }).catch(err=>{
    res.send({err})
  });
}

module.exports.getSurveys = async(req,res)=>{
  const forms = await Form.find({'published':true}, 'form.title')
  res.status(200).send(forms)
}

// get users
module.exports.getDescription = async(req,res)=>{
  const {form:{description}} = await Form.findOne({'_id':req.params.id},'form.description')
  res.send({description}); 
                   
}