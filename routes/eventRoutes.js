const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

router.post("/", protect, createEvent);

router.get("/", protect, getAllEvents);

router.get("/:id", protect, getEventById);

router.put("/:id", protect, updateEvent);

router.delete("/:id", protect, deleteEvent);

module.exports = router;