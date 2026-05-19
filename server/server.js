import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";
import axios from "axios";

import router from "./routes/studentRoutes.js";

dns.setDefaultResultOrder(
  "ipv4first"
);

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Body Parser
app.use(express.json());


// MongoDB Connect
mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() =>
    console.log(
      "MongoDB Connected"
    )
  )
  .catch((err) =>
    console.log(err)
  );


// Routes
app.use(
  "/api/students",
  router
);


// Home Route
app.get("/", (req, res) => {

  res.send(
    "API Running"
  );
});


// Keep Server Alive
setInterval(async () => {

  try {

    await axios.get(
      process.env.BASE_URL
    );

    console.log(
      "Self Ping Success"
    );

  } catch (error) {

    console.log(
      "Ping Failed"
    );
  }

}, 300000);



// PORT
const PORT =
  process.env.PORT || 5000;


// Listen
app.listen(PORT, () => {

  console.log(
    `Server running on ${PORT}`
  );
});