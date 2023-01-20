import { Router } from 'express'
import { Poll } from '../models/poll.js'

const router = Router()

router.get('/', function (req, res) {
  req.body.total = {totalOne: 0, totalTwo: 0}
  Poll.find({})
  .sort({ createdAt: "desc" })
  .then(polls => {
    res.render('index', { 
      title: 'Poll App',
      polls
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
})

router.get('/login', function (req, res){
  console.log("Login please!")
  res.render("login", {
    title: "Login"
  })

})

export {
  router
}
