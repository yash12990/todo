import express from 'express';

const app = express();

const PORT = 5010;

app.listen(PORT , () => console.log("Server running on: https://localhost:",PORT));