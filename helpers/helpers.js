let mongoose = require('');

exports.connectDB = () => {
  mongoose.connnect(process.env.DB_URL);
  mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
