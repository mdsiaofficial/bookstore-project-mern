import express from "express";
import { PORT } from "./config";
const app = express();


// app.get("/", (req, res) => {
//   console.log("header : - ", req.header);
//   console.log("body : - ", req.body);
//   console.log("query : - ", req.query);
//   console.log("url : - ", req.url);
//   console.log("baseUrl : - ", req.baseUrl);
//   console.log("method : - ", req.method);
//   console.log("cookies : - ", req.cookies);
//   console.log("params : - ", req.params);
//   // res.status(201).send(req);
//   res.status(201).json({ message: "OK" });
// });

// app.post("/", (req, res) => {
//   console.log("header : - ", req.header);
//   console.log("body : - ", req.body);
//   console.log("query : - ", req.query);
//   console.log("url : - ", req.url);
//   console.log("baseUrl : - ", req.baseUrl);
//   console.log("method : - ", req.method);
//   console.log("cookies : - ", req.cookies);
//   console.log("params : - ", req.params);
//   // res.status(201).send(req);
//   res.status(201).cookie("auth", "fdasgsfdhrts54dfgdgt54").json({ message: "OK" });
// });


app.get("/", (req, res) => {
  res.status(201).json({ message: "OK" });
});
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on 5555`);
});