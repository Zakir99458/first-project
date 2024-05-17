import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app = express();
// const mongoose = require('mongoose');


// Parsers
app.use(express.json());
app.use(cors());

// http://localhost:5000/api/v1/students
// application routes
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

// console.log(process.cwd());
export default app;
