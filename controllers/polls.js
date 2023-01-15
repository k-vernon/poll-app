import { Poll } from "../models/poll.js";

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

function newPoll(req, res){
  res.render('polls/new', {
    title: "Create Poll"
  })

}

export {
  index,
  newPoll as new,
}