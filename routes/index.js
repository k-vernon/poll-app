import { Router } from 'express'
import { Poll } from '../models/poll.js'

const router = Router()

router.get('/', function (req, res) {
  Poll.find({})
  
  .then(poll => {
    res.render('index', { 
      title: 'Poll App',
      poll
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
