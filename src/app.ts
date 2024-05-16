import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
// const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

// console.log(process.cwd());
export default app;
