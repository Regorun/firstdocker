const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json()); // Allows Node to read JSON sent from the HTML page

// Standard CORS fix so your browser doesn't block the request
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Connection URL (Docker resolves the container name to its internal IP)
// REPLACE 'YOUR_MONGO_CONTAINER_NAME' WITH YOUR ACTUAL MONGODB CONTAINER NAME
const mongoUrl = 'mongodb://jrmdb:27017';
const client = new MongoClient(mongoUrl);
let db;

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        db = client.db('userDatabase'); // Creates a database named 'userDatabase'
        console.log("Connected successfully to MongoDB container! from node server");
    } catch (err) {
        console.error("MongoDB connection failed from node server", err);
    }
}
connectDB();

// Listen for the POST request from your login.html page
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required! message from node server" });
    }

    try {
        const collection = db.collection('users'); // Creates a table/collection named 'users'
        
        // Insert the data directly into MongoDB
        await collection.insertOne({ email, password, createdAt: new Date() });
        
        console.log(`Saved user to DB: ${email}`);
        res.json({ message: "User credentials successfully saved to MongoDB! from node server" });
    } catch (error) {
        res.status(500).json({ message: "Error saving to database from node server" });
    }
});

// Start the server on port 5000
app.listen(5000, () => {
    console.log("nodejs server running on port 5000");
});
