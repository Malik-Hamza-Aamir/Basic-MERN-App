const { PrismaClient } = require("@prisma/client");

// Use a global singleton for the Prisma Client
if (!global.__prisma) {
  global.__prisma = new PrismaClient();
}

const db = global.__prisma;

module.exports = { db };
