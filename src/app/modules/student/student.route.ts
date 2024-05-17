import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// will call controller
// http://localhost:5000/api/v1/students/create-student
router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSinglStudent);

export const StudentRoutes = router;
