import { Poll } from "../models/poll.js";


function newPoll(req, res){
  res.render('polls/new', {
    title: "Create Poll"
    
  })
}

function create(req, res){
  console.log("Body:", req.body)
  Poll.create(req.body)
  .then(poll => {
    console.log("Poll:", poll)
    res.redirect('/polls')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function index(req, res){
  Poll.find({})
  .then(poll => {
    res.render("polls/index", {
      title: "All Polls",
      poll,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function show(req, res) {
  Poll.findById(req.params.id)
  .populate("choices")
  .then(poll => {
    console.log("Fix Errorrrrr:", poll);
    res.render("polls/show", {
      title: "Poll",
      poll: poll,
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
  show,
}