import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Running PORT is set automatically by App Engine
const port = process.env.PORT || 4200;
const app = express();

const bin = path.join(__dirname, "/bin/portfolio-client/browser");

app.use(express.static(bin));

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname + "/bin/portfolio-client/browser/index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
