const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const requestSchema = new Schema({
   requestorID:{
       type: String,
       lowercase :true
   },
   requestID:{
    type: Number,
 
}
   ,
   status:{
    type: String,
    enum: ['PENDING', 'CLOSED','REJECTED'],
    default: 'PENDING'
  },
   replacementID:{
    type: String
    },
   requestType:{
       type: String,
       enum: ['ANNUAL', 'MATERNITY','SICK','COMPENSATION','ACCIDENTAL','CHANGEDAYOFF']
       
   },
   gender:{
    type : String
   },
   documents:{
       type: String,
       required: function() {
        return this.requestType === 'SICK' ||(this.requestType === 'MATERNITY' && gender === 'FEMALE')  ;
      }
   },
   leaveInterval: { 
  start: { 
    type: Date},
    end: { type: Date },
  },
  dayOffReq:{
    type:Number
  }
});

module.exports.schema = requestSchema;
module.exports.model = mongoose.model('requests',requestSchema);