const router = require("express").Router();
const {
  models: { User, Event },
} = require("../db");
const { getToken, checkForAdmin } = require("./adminAuth");

// GET /api/events
router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    next(error);
  }
});

// GET /api/events/:id
router.get("/:id", async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/events
router.post("/", async (req, res, next) => {
  try {
    const loggedInUser = await User.findByToken(req.headers.authorization);
    if (loggedInUser.isAdmin) {
      const event = await Event.create(req.body);
      if (event) {
        res.json(event);
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
});

//PUT /api/events ADMIN ONLY
router.put("/:id", getToken, checkForAdmin, async (req, res, next) => {
  try {
    console.log("PARAMS", req.params.id);
    const event = await Event.findByPk(req.params.id);
    if (event) {
      const editEvent = await event.update(req.body);
      res.json(editEvent);
    } else {
      res.json({ error: "Event not found" });
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /api/events/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const loggedInUser = await User.findByToken(req.headers.authorization);
    if (loggedInUser.isAdmin) {
      const event = await Event.findByPk(req.params.id);
      await event.destroy();
      res.send(event);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
