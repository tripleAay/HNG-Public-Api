const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    const current_datetime = new Date();
    res.send({
        email: process.env.EMAIL,
        current_datetime: current_datetime.toISOString(),
        github_url: "",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});