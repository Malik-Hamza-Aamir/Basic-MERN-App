const express = require("express");
const subNoteRouter = express.Router();
const {
  handleGetAllSubNotes,
  handleCreateSubNotes,
  handleDeleteSubNote,
  handleUpdateSubNote
} = require("../controllers/subNote.controller");

// GET and Create a SubNote via an ID of Note
subNoteRouter
  .route("/:id")
  .get(handleGetAllSubNotes)
  .post(handleCreateSubNotes)
  .delete(handleDeleteSubNote)
  .put(handleUpdateSubNote);

module.exports = { subNoteRouter };
