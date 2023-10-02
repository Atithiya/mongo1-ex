const express = require("express");
const app = express();
const port = 3000;
const route = require("./route");

app.use("/api", route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
