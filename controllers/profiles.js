import { Poll } from "../models/poll.js";
import { Profile } from "../models/profile.js";


function index(req, res) {
  // Profile.findById(req.params.id)
  // .populate("polls")
  Poll.find({})
  .then(profile => {
    res.render("profiles/index", {
      title: "Profile",
      profile,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}