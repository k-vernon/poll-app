import { Router } from "express";
import * as pollsCtrl from "../controllers/polls.js"

const router = Router()

router.get("/", pollsCtrl.index)

export {
  router
}