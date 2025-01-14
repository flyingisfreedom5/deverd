const Conversation = require('../models/conversation')

module.exports = {
  create,
  getUserId
}

//new room
async function create(req, res) {
  const newConversation = new Conversation({
    users: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getUserId(req, res) {
  console.log(req.params)
  try {
    const conversation = await Conversation.find({
      users:{ $in:[req.params.userId]}
    }).populate('users')
    res.status(200).json(conversation);
  } catch (err) {
    res.status(400).json(err);
  }
}


 


