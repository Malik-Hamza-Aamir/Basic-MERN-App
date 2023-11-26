const { db } = require("../db/db.server");

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
    return await db.user.create({
        data: {
            username,
            email,
            password,
        },
        select: {
            id: true,
            username: true,
            email: true,
            password: true,
        }
    })
}


module.exports = { listAllUsers, createUser };