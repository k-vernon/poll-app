import { Router } from "express";
import * as pollsCtrl from "../controllers/polls.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get("/", pollsCtrl.index)
router.get("/new", pollsCtrl.new)


router.post("/choices", pollsCtrl.addToChoices)

export {
  router
}