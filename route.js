const Router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const KEY = process.env.AP_KEY;

Router.post("/maps", async (req, res) => {
  try {
    const { ORIGIN, DESTINATION } = req.body;
    if (!ORIGIN || !DESTINATION) {
      return res.status(404).send("NO DATA FOUND.");
    }
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${DESTINATION}&origins=${ORIGIN}&units=metric&key=${KEY}`;
    const urlData = await axios(url);
    if (urlData.data.status !== "OK") {
      return res.send("Unable to fetch data.");
    }
    const distance = [];
    const duration = [];
    const rows = urlData.data.rows;

    // Extracting relevant information from the url response
    rows.forEach((row) => {
      row.elements.forEach((element) => {
        distance.push(element.distance.text);
        duration.push(element.duration.text);
      });
    });
    await res.status(200).json({ distance, duration });
  } catch (err) {
    console.log(`Cannot fetch required data. ${err}`);
    return res.status(500).json({ message: "Invalid request." });
  }
});

module.exports = Router;
