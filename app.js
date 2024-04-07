const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const childRouter = require("./Routes/child_router");
const teacherRouter = require("./Routes/teacher_router");
const classRouter = require("./Routes/class_router");
const loginRouter= require("./Routes/auth_router");
const authmw = require("./Middlewares/auth_middleware")
const mongoose = require("mongoose");

const app = express();



mongoose.connect("mongodb://127.0.0.1:27017/cloudDB").then(()=>{
    console.log("DB connected")
    app.listen(8080, () => {
      console.log("Server is running on http://localhost:8080");
    });
}).catch((error)=>{
  console.log(error)
})


app.use(morgan("dev"));
// to pars json
app.use(express.json());
app.use(loginRouter);
// auth mw to check for token before requesting any handler 
app.use(authmw);

app.use(childRouter);
app.use(teacherRouter);
app.use(classRouter);


app.use((request, response) => {
  console.log("Entered Not Found Layer 2");
  response.status(404).json({ message: "Not Found" });
});

app.use((error, request, response) => {
  console.log("Entered Error Layer 2");
  response.status(500).json({ Error: "Error " + error });
});
