import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import authRoutes from './routes/auth.js'
import noteRoutes from './routes/notes.js'
import cors from "cors";



dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(
  cors({
    origin: "https://mern-notes-app-blush.vercel.app/login",
    credentials: true,
  })
);

app.use(express.json());



app.use("/api/users",authRoutes);
app.use("/api/notes",noteRoutes);

app.get('/', (req, res) => {
    res.send('Hello World my name is dhananjay');
});

connectDb();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
