const {
  listAllSubNotes,
  createSubNote,
  deleteSingleSubNote,
  updateSubNote,
} = require("../model/subnote.model");

const handleGetAllSubNotes = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.log("Node id : ", id);
  try {
    const subNotes = await listAllSubNotes(id);
    return res.status(200).json(subNotes);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const handleCreateSubNotes = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const subNote = await createSubNote(req.body, id);
    return res.status(201).json(subNote);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const handleDeleteSubNote = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await deleteSingleSubNote(id);
    return res.status(204).json({ message: "subNote successfully Deleted" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const handleUpdateSubNote = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const subNote = await updateSubNote(req.body, id);
    return res.status(201).json(subNote);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  handleGetAllSubNotes,
  handleCreateSubNotes,
  handleDeleteSubNote,
  handleUpdateSubNote
};
