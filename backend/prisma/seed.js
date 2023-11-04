const { db } = require("../src/db/db.server");

function getNotes() {
  return [
    {
      title: "Workout",
      description: "Follow this full Week Workout",
    },
    {
      title: "Study Plan",
      description: "Follow this study plan till mid term exams",
    },
    {
      title: "Coding",
      description: "These tasks must be done on a daily basis",
    },
  ];
}

function getSubNotesWorkout() {
  return [
    {
      name: "Shoulders",
      longDetail:
        "Intense shoulder workout with dumbbells and resistance bands for strength and flexibility.",
    },
    {
      name: "Legs",
      longDetail:
        "Leg day focusing on squats, lunges, and calf raises for building lower body strength.",
    },
  ];
}

function getSubNotesStudyPlan() {
  return [
    {
      name: "History",
      longDetail:
        "Exploring ancient civilizations, notable events, and key historical figures from around the world.",
    },
    {
      name: "Science",
      longDetail:
        "Diving into the realms of physics, chemistry, and biology, uncovering the wonders of the natural world.",
    },
  ];
}

function getSubNotesCoding() {
  return [
    {
      name: "Data Structures & Algorithms",
      longDetail:
        "In-depth study of data structures, algorithms, and problem-solving techniques for efficient programming.",
    },
    {
      name: "Web Development",
      longDetail:
        "Learning HTML, CSS, JavaScript, and server-side technologies to build dynamic web applications and websites.",
    },
  ];
}

const seed = async () => {
  await Promise.all(
    getNotes().map(async (note) => {
      await db.note.create({
        data: {
          title: note.title,
          description: note.description,
        },
      });
    })
  );

  const noteWorkout = await db.note.findFirst({
    where: {
      title: "Workout",
    },
  });

  const noteStudyPlan = await db.note.findFirst({
    where: {
      title: "Study Plan",
    },
  });

  const noteCoding = await db.note.findFirst({
    where: {
      title: "Coding",
    },
  });

  if (noteWorkout) {
    await Promise.all(
      getSubNotesWorkout().map(async (subnotes) => {
        await db.subNote.create({
          data: {
            name: subnotes.name,
            longDetail: subnotes.longDetail,
            noteId: noteWorkout.id,
          },
        });
      })
    );
  } else {
    console.log("Workout note not found");
  }

  if (noteStudyPlan) {
    await Promise.all(
      getSubNotesStudyPlan().map(async (subnotes) => {
        await db.subNote.create({
          data: {
            name: subnotes.name,
            longDetail: subnotes.longDetail,
            noteId: noteStudyPlan.id,
          },
        });
      })
    );
  } else {
    console.log("Study Plan note not found");
  }

  if (noteCoding) {
    await Promise.all(
      getSubNotesCoding().map(async (subnotes) => {
        await db.subNote.create({
          data: {
            name: subnotes.name,
            longDetail: subnotes.longDetail,
            noteId: noteCoding.id,
          },
        });
      })
    );
  } else {
    console.log("Coding note not found");
  }
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
