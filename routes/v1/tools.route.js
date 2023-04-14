const express = require("express");
const toolsController = require("../../controllers/tools.controller");
const viewCount = require("../../middleware/viewCount");

const router = express.Router();

// router.get("/:id", (req, res) => {
//   res.send("tools found with parameter");
// });

// router.post("/", (req, res) => {
//   res.send("tools added");
// });

router
  .route("/")

  /**
   * @api {get}  /tools get all tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader { string } user's access token
   *
   * @apiParam {Number {1-}}    [page-1]      List page
   * @apiParam {Number {1-100}}    [limit-10]     user's per page
   *
   * @apiSuccess {objects[]}  all the tools
   *
   * @apiError { Unothorazied - 401}  Unothorazied  Only Authenticated user can access
   * @apiError { Forbidden - 401}  Forbidden  Only admin user can access
   */

  .get(toolsController.getAllTools)
  /**
   * @api {post}  /tools save a tol
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader { string } user's access token
   *
   * @apiParam {Number {1-}}    [page-1]      List page
   * @apiParam {Number {1-100}}    [limit-10]     user's per page
   *
   * @apiSuccess {objects[]}  all the tools
   *
   * @apiError { Unothorazied - 401}  Unothorazied  Only Authenticated user can access
   * @apiError { Forbidden - 401}  Forbidden  Only admin user can access
   */
  .post(toolsController.saveATool);

router.route("/:id").get(viewCount, toolsController.getToolDetails);

module.exports = router;
