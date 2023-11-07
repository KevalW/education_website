const express = require('express');
const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://mandar_dhage:8MAvnltXnAtSbkxu@cluster.o1xjqtg.mongodb.net/';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const userModel = mongoose.model('users', userSchema);

// Connect with mongoose
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to our local database Event Management");

        // Create an information to be saved...
        const user1 = new userModel({
            name: 'sakshi  dhage',
            email: 'sakhsidhage2201@gmail.com',
        });

        user1.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log("Error saving data:", err);
                mongoose.connection.close();
            });
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });

const app = express();
const port = 2200;
app.get('/hello', (req, res) => {
    res.status(200).json("hello mern learners");
});

app.listen(port, () => {
    console.log(`Server is running at port named: ${port}`);
});
