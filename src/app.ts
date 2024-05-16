import express, { Request, Response } from 'express';
const app = express()
// const mongoose = require('mongoose');


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// console.log(process.cwd());
export default app;