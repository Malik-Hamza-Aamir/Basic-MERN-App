const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { noteRouter } = require("./routes/note.route");
const { subNoteRouter } = require("./routes/subNote.route");
const { userRouter } = require("./routes/user.route");

dotenv.config();
if (!process.env.PORT) {
  process.exit(1);
}

const port = parseInt(process.env.PORT, 10);
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);
app.use("/subnote", subNoteRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
