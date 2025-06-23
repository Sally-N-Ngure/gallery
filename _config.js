<<<<<<< HEAD
var config = {};

config.mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/darkroom';

module.exports = config;
=======
var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://salita:Jabulani@0793835080@devops10.e6q9xjo.mongodb.net/?retryWrites=true&w=majority&appName=DevOps10',
    development: 'mmongodb+srv://salita:Jabulani@0793835080@devops10.e6q9xjo.mongodb.net/?retryWrites=true&w=majority&appName=DevOps10',
    test: 'mongodb+srv://salita:Jabulani@0793835080@devops10.e6q9xjo.mongodb.net/?retryWrites=true&w=majority&appName=DevOps10',
}
module.exports = config;
>>>>>>> test
