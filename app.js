const express = require("express");
const app = express();
require("dotenv").config();
const route = require("./route");
const PORT = process.env.PORT;

const serverProcess = async () => {
  try {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    await app.use(route);

    await app.listen(PORT, () => {
      console.log("Server started.");
    });
  } catch (err) {
    console.error(`Error Occured: ${err}`);
  }
};

serverProcess();
