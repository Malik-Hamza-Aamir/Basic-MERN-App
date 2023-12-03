const express = require("express");
const noteRouter = express.Router();
const {
  handleGetAllNotes,
  handleCreateNote,
  handleGetSingleNote,
  handleDeleteNote
} = require("../controllers/note.controller");
const { authenticateToken } = require("../middleware/authenticateToken");

// Get and Create notes
noteRouter.route("/").get(authenticateToken, handleGetAllNotes).post(authenticateToken, handleCreateNote);

// Delete and Get by id
noteRouter.route("/:id").get(authenticateToken, handleGetSingleNote).delete(authenticateToken, handleDeleteNote);

module.exports = { noteRouter };
