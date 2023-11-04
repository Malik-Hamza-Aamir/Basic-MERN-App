const { db } = require("../db/db.server");
// import { PrismaClient } from "@prisma/client";
// const db = new PrismaClient();

// get all subnotes using noteID
const listAllSubNotes = async (id) => {
  const note = await db.note.findUnique({
    where: {
      id,
    },
    select: {
      subNotes: true,
    },
  });

  return note.subNotes;
};

// create new subnote for a particular note id
const createSubNote = async (noteInfo, id) => {
  const { name, longDetail } = noteInfo;

  const createdSubNote = await db.subNote.create({
    data: {
      name,
      longDetail,
      note: {
        connect: {
          id,
        },
      },
    },
    select: {
      id: true,
      name: true,
      longDetail: true,
    },
  });

  return createdSubNote;
};

// get subnote by note id
const getSingleSubNote = async (noteId) => {};

// delete subnote by id
const deleteSingleSubNote = async (id) => {
  await db.subNote.delete({
    where: {
      id,
    },
  });
};

// update subnote by id
const updateSubNote = async (noteInfo, id) => {
  const { name, longDetail } = noteInfo;
  return await db.subNote.update({
    where: {
      id,
    },
    data: {
      name,
      longDetail,
    },
    select: {
      id: true,
      name: true,
      longDetail: true,
    },
  });
};

module.exports = {
  listAllSubNotes,
  createSubNote,
  getSingleSubNote,
  deleteSingleSubNote,
  updateSubNote,
};
