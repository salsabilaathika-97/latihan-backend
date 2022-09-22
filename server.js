const express = require("express");

const app = express();

app.use(express.json());

app.get("", (req, res) => {
    res.send("Halo, ini API saya");
})

const PORT = 8001

app.listen(PORT, () => {
    console.log(`API jalan di port ${PORT}`);
})