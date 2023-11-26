const express = require("express");
const userRouter = express.Router();
const { handleGetAllUsers, handleCreateUser } = require("../controllers/user.controller");

// Get and Create Users
userRouter.route("/").get(handleGetAllUsers).post(handleCreateUser);

// Delete and Get by id
// noteRouter.route("/:id").get(handleGetSingleNote).delete(handleDeleteNote);

module.exports = { userRouter };
