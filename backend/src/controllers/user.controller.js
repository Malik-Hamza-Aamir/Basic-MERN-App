const { listAllUsers, createUser } = require("../model/user.model");

const handleGetAllUsers = async (req, res) => {
  try {
    const users = await listAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const handleCreateUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = { handleGetAllUsers, handleCreateUser };