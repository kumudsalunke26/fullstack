const mongoose = require('mongoose');

// Define a schema for media files

// Define a schema for stories
const StorySchema = new mongoose.Schema({
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users"
  },
  authorName : {type : String,required : true},
  title: { type: String, required: true },      
  content: { type: String, required: true },  
  imageUrl : {type : String},                      
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' }, 
  createdAt: { type: Date, default: Date.now }, 
});

// Export the models
module.exports = {
  Story: mongoose.model('Story', StorySchema),
};
