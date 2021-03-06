const mongoose = require('mongoose')
require("dotenv").config()

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/test-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

mongoose.Promise = global.Promise

module.exports = mongoose.connection
