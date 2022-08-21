const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  conversationId:{
    type: mongoose.Types.ObjectId, ref: 'Conversation',
  },
  sender:{
    type: mongoose.Types.ObjectId, ref: 'User',
  },
  text:{
    type:String,
  }},
  {
    timestamps: true
  })

module.exports = mongoose.model('Message', messageSchema);