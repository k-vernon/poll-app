import { Router } from "express";
import * as pollsCtrl from "../controllers/polls.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get("/", pollsCtrl.index)
router.get("/new", pollsCtrl.new)
router.get("/:id", pollsCtrl.show)
router.get("/:id/edit", isLoggedIn, pollsCtrl.edit)

router.post("/", pollsCtrl.create)

router.delete("/:id", pollsCtrl.delete)

// router.put("/:id", pollsCtrl.update)
router.post("/:id", isLoggedIn, pollsCtrl.saveResult)

export {
  router
}