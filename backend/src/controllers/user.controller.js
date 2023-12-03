const { sign } = require("jsonwebtoken");
const {
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  findUser,
  verifyUser,
} = require("../model/user.model");

// signup
const handleCreateUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// login
const handleAuthentication = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUser(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const pass = await verifyUser(password, user.password);

    if (pass) {
      const payload = {
        userId: user.id,
        email: user.email,
      };

      const expiresIn = 2 * 24 * 60 * 60;

      const signedToken = sign(payload, "1415", { expiresIn });

      await res.cookie("accessToken", signedToken, { httpOnly: true });
      return res.status(200).json({ token: signedToken });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// get user full information
const handleUserInformation = async (req, res) => {
  const id = req.user.userId;
  try {
    const user = await getSingleUser(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// delete user
const handleDeleteUser = async (req, res) => {
  const id = req.user.userId;
  try {
    await deleteUser(id);
    return res.status(204).json({ message: "User Deleted Successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// update user info
const handleUpdateUser = async (req, res) => {
  const id = req.user.userId;
  try {
    const user = await updateUser(req.body, id);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// logout the user
const handleLogout = async (req, res) => {
  return res.status(200).json({ message: "Logout successful" });
};

module.exports = {
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
  handleAuthentication,
  handleUserInformation,
  handleLogout,
};
