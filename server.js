// SECTION Modules
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// SECTION Routes
app.get("/", (req, res) => res.json({ msg: "Welcome to the ContactKeeper API..." }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// SECTION Listener
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
