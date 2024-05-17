import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {

// export default studentSchema;

    const { student: studentData } = req.body;
    const {error, value} = studentValidationSchema.validate(studentData);
    console.log({error}, {value});
    if(error){
        res.status(500).json({
            success: false,
            message: 'created successfully',
            date: error,
          });
    }
    
    // will call service funct to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'created successfully',
      date: result,
    });
  } catch (err) {
    res.status(500).json({
        success: false,
        message: 'created successfully',
        date: err,
      });
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      date: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSinglStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    // send response
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      date: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSinglStudent,
};
