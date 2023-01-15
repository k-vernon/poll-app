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

export {
  index,
}