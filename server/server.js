const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const usersRouter = require("./routes/users");
const contactsRouter = require("./routes/contacts");

require("dotenv").config();

const app = express();

const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_URL = process.env.REDIS_URL;

if (!PORT) {
  console.log("No Port Found");
}
if (!SESSION_SECRET) {
  console.log("No Session Secret Found");
}
if (!REDIS_URL) {
  console.log("No Redis Hostname Found");
}
if (!PORT || !SESSION_SECRET || !REDIS_URL) {
  return process.exit(1);
}

app.get("/", (req, res) => {
  res.json({ hello: "Default page" });
});

app.use("/api", usersRouter);
app.use("/api", contactsRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
