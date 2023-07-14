const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const {DB_HOST, PORT} = process.env

async function main() {
  try {
    await mongoose.connect(DB_HOST);
    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (error) {
    console.error("main failed:", error.message);
    process.exit(1);
  }
}
main();

