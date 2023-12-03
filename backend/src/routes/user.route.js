const express = require("express");
const userRouter = express.Router();
const {
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
  handleAuthentication,
  handleUserInformation,
  handleLogout,
} = require("../controllers/user.controller");
const { authenticateToken } = require("../middleware/authenticateToken");

userRouter.route("/signup").post(handleCreateUser);
userRouter.route("/login").post(handleAuthentication);
userRouter.route("/logout").post(authenticateToken, handleLogout);

userRouter
  .route("/")
  .get(authenticateToken, handleUserInformation)
  .delete(authenticateToken, handleDeleteUser)
  .put(authenticateToken, handleUpdateUser);

module.exports = { userRouter };
