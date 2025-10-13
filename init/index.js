const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//connection to DB
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
})
    .catch((err) => {
        console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "68e725e094828d2458abaf65" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();