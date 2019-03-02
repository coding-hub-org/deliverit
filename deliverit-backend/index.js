const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/indexRouter"));
app.use("/api", require("./routes/productRouter"));
app.use("/api", require("./routes/userRouter"));

app.listen(process.env.port || 3001, () => {
  console.log("Back end life ready at 3001");
});
