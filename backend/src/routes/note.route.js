const express = require("express");
const noteRouter = express.Router();
const {
  handleGetAllNotes,
  handleCreateNote,
  handleGetSingleNote,
  handleDeleteNote
} = require("../controllers/note.controller");

// Get and Create notes
noteRouter.route("/").get(handleGetAllNotes).post(handleCreateNote);

// Delete and Get by id
noteRouter.route("/:id").get(handleGetSingleNote).delete(handleDeleteNote);

module.exports = { noteRouter };
