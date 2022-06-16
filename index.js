const expres = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRouter = require("./routes/usersRouter");

dotenv.config();
const port = process.env.MYPORT || 4500;
const app = expres();

app.use(cors({ origin: "http://localhost" }));
app.use("/api/v1/users", usersRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
