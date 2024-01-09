const mongoose = require('mongoose');

const connectToDb = () => {
    const username = "root";
    const password = "admin";
    
    mongoose.connect(
        `mongodb+srv://${username}:${password}@todolist.noyrzr7.mongodb.net/?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log("MongoDB Atlas CONECTADO!"))
        .catch((err) => console.log(err))
};

module.exports = connectToDb;
