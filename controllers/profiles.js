import { Profile } from "../models/profile.js";


function show(req, res) {
  Profile.findById(req.params.id)
  .populate("polls")
  .then(profile => {
    res.render("profiles/show", {
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
  show
}