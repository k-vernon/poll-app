import mongoose from 'mongoose'

const Schema = mongoose.Schema

const resultsSchema = new Schema ({
  usersChoiceOne: Number,
  usersChoiceTwo: Number,
  total: Number
})


const pollSchema = new Schema({
  question: { 
    type: String,
    required: true
  },
  topic: {
    type: String,
    enum: ["General", "Relationships", "Funny", "Would You Rather"],
    default: "General"
  },
  description: {
    type: String,
  },
  choices: {
    choiceOne: String,
    choiceTwo: String,
    // required: true
  },
  results: { 
    resultsSchema
  },  
  author: { 
    type: Schema.Types.ObjectId, ref: "Profile" 
  },
  votes: [{
    type: Schema.Types.ObjectId, ref: "Profile"
  }]
},
  { timestamps: true}
)

const Poll = mongoose.model('Poll', pollSchema)

export {
  Poll
}
