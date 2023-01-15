import { Router } from "express";
import * as pollsCtrl from "../controllers/polls.js"

const router = Router()

router.get("/", pollsCtrl.index)
router.get("/new", pollsCtrl.new)

export {
  router
}