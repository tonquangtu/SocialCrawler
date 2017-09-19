let mongoose = require('mongoose');

exports.connectDB = () => {
  mongoose.connect(process.env.DB_URL);
  mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
