import { Router } from "express";
import * as pollsCtrl from "../controllers/polls.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get("/", pollsCtrl.index)
router.get("/new", pollsCtrl.new)
router.get("/:id", pollsCtrl.show)
router.get("/:id/results", pollsCtrl.showResults)
router.get("/:id/edit", isLoggedIn, pollsCtrl.edit)

router.post("/", isLoggedIn, pollsCtrl.create)

router.delete("/:id", isLoggedIn, pollsCtrl.delete)

router.post("/:id", isLoggedIn, pollsCtrl.saveResult)
router.put("/:id", isLoggedIn, pollsCtrl.update)

export {
  router
}