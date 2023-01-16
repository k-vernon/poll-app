import mongoose from 'mongoose'

const Schema = mongoose.Schema

const choiceSchema = new Schema ({
  text: {
    type: String,
  }
})


const pollSchema = new Schema({
  question: { 
    type: String,
    required: true
  },
  description: String,
  choices:[choiceSchema],
  topic: { type: Schema.Types.ObjectId, ref: "Topic" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Poll = mongoose.model('Poll', pollSchema)

export {
  Poll
}
