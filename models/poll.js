import mongoose from 'mongoose'

const Schema = mongoose.Schema

const choiceSchema = new Schema ({
  text: {
    type: String,
    minlength: 1,
    maxlength: 30,
  }
})


const pollSchema = new Schema({
  question: String,
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
