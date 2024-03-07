NOTE: Create a .env file in root folder, insert the following rows:

PORT: Your desired port number
AP_KEY: Your Google Distance Matrix API Key

In PWD (Present Working Directory), run "node app.js" OR "nodemon app.js" (AFTER installing nodemon using "npm install -D nodemon") to run the server in localhost.

URL of POST Request: localhost:PORT/maps

In Request Body, pass {"ORIGIN": "your origin", "DESTINATION": "your destination"} object.

In Response body, you will get DISTANCE between ORIGIN - DESTINATION and DURATION (Time it takes to reach from ORIGIN - DESTINATION).
