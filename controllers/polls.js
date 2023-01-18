import { Poll } from "../models/poll.js";


function newPoll(req, res){
  res.render("polls/new", {
    title: "Create Poll"
    
  })
}

function create(req, res){
  req.body.author = req.user.profile._id
  req.body.description = req.body.description ? req.body.description : 'No description'
  
  Poll.create(req.body)
  .then(poll => {
    console.log("Poll:", poll)
    res.redirect(`/polls/${poll._id}`)
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
    res.render("polls/show", {
      title: "Poll",
      poll,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function edit(req, res) {
  Poll.findById(req.params.id)
  .then(poll => {
    res.render("polls/edit", {
      title: "Edit Poll",
      poll
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res){
  Poll.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(poll => {
    res.redirect(`/polls/${poll._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deletePoll(req, res){
  console.log("Deleted Poll");
  Poll.findByIdAndDelete(req.params.id)
  .then(poll => {
    res.redirect("/polls")
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
  edit,
  update,
  deletePoll as delete,
}