const mongoose = require('mongoose');

const URI = "mongodb+srv://tuansyho:tuansyho@cluster0-d8kie.gcp.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async () => {
	await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
}
module.exports = connectDB;