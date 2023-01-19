import mongoose from 'mongoose'

const Schema = mongoose.Schema

const resultSchema = new Schema ({
  userChoseOne: Boolean,
  userChoseTwo: Boolean,
  voter: { type: Schema.Types.ObjectId, ref: "Profile" }
})

const totalSchema = new Schema ({
  totalOne: { type: Number, default: 0, },
  totalTwo: { type: Number, default: 0, }
})

const choiceSchema = new Schema ({
  choiceOne: { type: String, required: true },
  choiceTwo: { type: String, required: true },
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
  choices: choiceSchema,
  author: { 
    type: Schema.Types.ObjectId, ref: "Profile" 
  },
  totals: totalSchema,
  results: [resultSchema],  
},
  { timestamps: true}
)

const Poll = mongoose.model('Poll', pollSchema)

export {
  Poll
}
