import * as profilesCtrl from "../controllers/profiles.js"
import { isLoggedIn } from "../middleware/middleware.js"
import { router } from "./polls.js"

router.get("/:id", isLoggedIn, profilesCtrl.index)

export {
  router
}