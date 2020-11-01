// SECTION Modules
const express = require("express");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;
connectDB();

// SECTION Middleware
app.use(express.json({ extended: false }));

// SECTION Routes
app.get("/", (req, res) => res.json({ msg: "Welcome to the ContactKeeper API..." }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// SECTION Listener
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
