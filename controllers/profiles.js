import { Profile } from "../models/profile.js";

function index(req, res){
  Profile.findById(req.params.id)
  .populate("polls")
  .then(profile => {
    res.render("profiles/index", {
      profile,
      title: "Profile"
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