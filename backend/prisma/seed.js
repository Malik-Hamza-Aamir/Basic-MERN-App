const { db } = require("../src/db/db.server");

const seed = async () => {
  await db.user.create({
    data: {
      username: "user2",
      email: "user2@example.com",
      password: "123",
      notes: {
        create: {
          title: "Note 1 User 2",
          description: "Description for Note 1 User 2",
          subNotes: {
            create: {
              name: "SubNote 1 Note 1 User 2",
              longDetail: "Long detail for SubNote 1 Note 1 User 2",
            },
          },
        },
      },
    },
  });
};

seed()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error("ERROR IN SEED:", e);
    await db.$disconnect();
    process.exit(1);
  });
