const router = require("express").Router();
const charCTRL = require("./../controller/character.controller");

router.route("/").get(charCTRL.fetchAll);
router.route("/:id").get(charCTRL.fetchById);

module.exports = router;
