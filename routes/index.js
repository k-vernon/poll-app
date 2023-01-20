import { Router } from 'express'
import { Poll } from '../models/poll.js'

const router = Router()

router.get('/', function (req, res) {
  req.body.total = {totalOne: 0, totalTwo: 0}
  Poll.find({})
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


export {
  router
}
