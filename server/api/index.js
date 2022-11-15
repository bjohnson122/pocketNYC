const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/events", require("./events"));
router.use("/resources", require("./resources"));
router.use("/favoriteResource", require("./favorite_resource"));
router.use("/favoriteEvent", require("./favorite_event"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
