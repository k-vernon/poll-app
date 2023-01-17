import { Poll } from "../models/poll.js";


function newPoll(req, res){
  res.render('polls/new', {
    title: "Create Poll"
    
  })
}

function create(req, res){
  if (req.body.choices) {
    req.body.choices = req.body.choices.split(', ')
  }
  console.log("Log Body", req.body)
  Poll.create(req.body)
  // .populate("topic")
  .then(poll => {
    console.log("Log Poll", poll)
    res.redirect('/polls')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function index(req, res){
  Poll.find({})
  .then(polls => {
    res.render("polls/index", {
      title: "All Polls",
      polls: polls,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

 

export {
  newPoll as new,
  create,
  index,
}