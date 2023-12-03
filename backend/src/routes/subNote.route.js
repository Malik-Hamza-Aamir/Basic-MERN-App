const express = require("express");
const subNoteRouter = express.Router();
const {
  handleGetAllSubNotes,
  handleCreateSubNotes,
  handleDeleteSubNote,
  handleUpdateSubNote
} = require("../controllers/subNote.controller");
const { authenticateToken } = require("../middleware/authenticateToken");

// GET and Create a SubNote via an ID of Note
subNoteRouter
  .route("/:id")
  .get(authenticateToken, handleGetAllSubNotes)
  .post(authenticateToken, handleCreateSubNotes)
  .delete(authenticateToken, handleDeleteSubNote)
  .put(authenticateToken, handleUpdateSubNote);

module.exports = { subNoteRouter };
