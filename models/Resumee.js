var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ResumeeSchema = {

  fname: {
    type: String,
    trim: true,
    required: 'FName required'
  },
  lname: {
    type: String,
    trim: true,
    required: 'LName required'
  },
  email: {
    type: String,
    trim: true
  },
  mobile: {
    type: Number,
    trim: true
    // required: 'Mobile required'
  },  
  linkedIn: {
    type: String,
    trim: true
  },
  facebook: {
    type: String,
    trim: true
  },
  skype: {
    type: String,
    trim: true
  }, 
  twitter: {
    type: String,
    trim: true
  },  

  city: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  currentAddress: {
    type: String,
    trim: true
  },
  district: {
    type: String,
    trim: true
  },  
  zipCode: {
    type: Number,
    trim: true
  },
  institute: {
    type: String,
    trim: true
  },
  degree: {
    type: String,
    trim: true
  },  
  fieldOfStudy: {
    type: String,
    trim: true
  },  
  grade: {
    type: String,
    trim: true
  },  
  startEdu: {
    type: String,
    trim: true
  },  
  endEdu: {
    type: String,
    trim: true
  },  
  title: {
    type: String,
    trim: true
  },  
  company: {
    type: String,
    trim: true
  },  
  location: {
    type: String,
    trim: true
  },
  des: {
    type: String,
    trim: true
  },
  startExp: {
    type: String,
    trim: true
  },
  endExp: {
    type: String,
    trim: true
  },
  skillSet: {
    type: String,
    trim: true
  },
  resumeAtt: {
    type: String,
    trim: true
  },  
  photoAtt: {
    type: String,
    trim: true
  },  
  othersAtt: {
    type: String,
    trim: true
  },
  resumeStatus2: {
    type: String,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
  
}

var Resumee = mongoose.model('Resumee', ResumeeSchema, 'resumees');
module.exports = Resumee;