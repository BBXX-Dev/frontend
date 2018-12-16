import * as express from "express";
import * as path from "path";

const app = express();
const port = 8080;
const publicPath = path.resolve(__dirname, "../../dist");

app.use(express.static(publicPath));

app.get("/api", (req, res) => {
  res.send("Hello from Express!");
});

// app.get("*", express.static(publicPath));

// app.get("/profile", (req, res) => {
//   res.send("Hey profile page!!");
// });

app.listen(port, () => {
  console.log(`Express server running on port: ${port}`);
});
