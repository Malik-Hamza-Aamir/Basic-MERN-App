const { db } = require("../db/db.server");

// get all notes
const listAllNotes = async () => {
  return await db.note.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      subNotes: true,
    },
  });
};

// create new note
const createNote = async (noteInfo) => {
  const { title, description } = noteInfo;
  return await db.note.create({
    data: {
      title,
      description,
    },
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
};

// get note by id
const getSingleNote = async (id) => {
  return await db.note.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      subNotes: true,
    },
  });
};

// delete note by id
const deleteSingleNote = async (id) => {
  await db.note.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  listAllNotes,
  createNote,
  getSingleNote,
  deleteSingleNote,
};
