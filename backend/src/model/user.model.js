const { db } = require("../db/db.server");
const bcrypt = require("bcrypt");

// get all users
const listAllUsers = async () => {
  return await db.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
};

// create a user
const createUser = async (userInfo) => {
  const { username, email, password } = userInfo;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating user");
  }
};

// get single User by ID
const getSingleUser = async (id) => {
  return await db.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
};

// delete user by id
const deleteUser = async (id) => {
  await db.user.delete({
    where: {
      id,
    },
  });
};

// update user by id
const updateUser = async (userInfo, id) => {
  const { username, email, password } = userInfo;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        username,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating user");
  }
};

// finding a username
const findUser = async (email) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });

  return user;
};

// password comparing
const verifyUser = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error(error);
    throw new Error("Error comparing passwords");
  }
};

module.exports = {
  listAllUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  findUser,
  verifyUser,
};
