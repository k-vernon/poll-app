import { Poll } from "../models/poll.js";


function newPoll(req, res){
  res.render("polls/new", {
    title: "Create Poll"
    
  })
}




function create(req, res){

  req.body.author = req.user.profile._id
  req.body.description = req.body.description ? req.body.description : 'No description'
  req.body.totals = {totalOne: 0, totalTwo: 0}
  
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
  .sort({ createdAt: "desc" })
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
    console.log("Testing Testing:", poll.totals)
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

function saveResult(req,res){

  const result = {
    userChoseOne: req.body.choiceOne === "on" ? true : false,
    userChoseTwo: req.body.choiceTwo === "on" ? true : false,
    voter: req.user.profile._id
  }
  console.log("Result:", result)
  

  Poll.findById(req.params.id)
  .then(poll => {
    poll.results.push(result)
    console.log(poll)
    // poll.results.userChoseOne === true ? poll.totals.totalOne += 1 : poll.totals.totalTwo += 1
    if (result.userChoseOne){
      poll.totals.totalOne++
    } else {
      poll.totals.totalTwo++
    }
    
    console.log("Vote Totals:", poll.totals)
    console.log("Poll:", poll)
    poll.save()
    .then(() => {
      res.redirect(`/polls/${req.params.id}/results`)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })


}


function showResults(req, res) {
  Poll.findById(req.params.id)
  .populate("totals")
  .then(poll => {
    console.log("Testing Testing:", poll.totals)
    res.render("polls/results", {
      title: "Poll Results",
      poll,
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
  edit,
  update,
  deletePoll as delete,
  saveResult,
  showResults
}