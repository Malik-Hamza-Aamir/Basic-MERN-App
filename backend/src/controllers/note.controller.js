const {
  listAllNotes,
  createNote,
  getSingleNote,
  deleteSingleNote,
} = require("../model/note.model");

const handleGetAllNotes = async (req, res) => {
  const userId = req.user.userId;
  console.log("user id :", userId);
  // try {
  //   const notes = await listAllNotes();
  //   return res.status(200).json(notes);
  // } catch (error) {
  //   return res.status(500).json(error.message);
  // }
};

const handleCreateNote = async (req, res) => {
  try {
    const note = await createNote(req.body);
    return res.status(201).json(note);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const handleDeleteNote = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await deleteSingleNote(id);
    return res.status(204).json({ message: "Note successfully Deleted" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const handleGetSingleNote = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const note = await getSingleNote(id);
    return res.status(200).json(note);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  handleGetAllNotes,
  handleCreateNote,
  handleDeleteNote,
  handleGetSingleNote,
};
