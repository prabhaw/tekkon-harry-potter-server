const router = require("express").Router();
const charRouter = require("./../modules/HarryPotterCharacter/routes/character.routers");

router.use("/harry-potter", charRouter);
module.exports = router;
