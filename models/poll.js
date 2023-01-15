import mongoose from 'mongoose'

const Schema = mongoose.Schema






const pollSchema = new Schema({
  question: String,
  descriotion: String,
  choices:[choiceSchema];
  topic: { type: Schema.Types.ObjectId, ref: "Topic" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Poll = mongoose.model('Poll', pollSchema)

export {
  Poll
}
