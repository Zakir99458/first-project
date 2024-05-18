import { z } from 'zod';

// Define Zod schemas for nested objects
const userNameValidationSchema = z.object({
  firstName: z.string().nonempty(),
  middleName: z.string().optional(),
  lastName: z.string().nonempty().regex(/^[A-Za-z]+$/),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty(),
  fatherOccupation: z.string().nonempty(),
  fatherContactNo: z.string().nonempty(),
  motherName: z.string().nonempty(),
  motherOccupation: z.string().nonempty(),
  motherContactNo: z.string().nonempty(),
});

const localGuardianValidationSchema = z.object({
  name: z.string().nonempty(),
  occupation: z.string().nonempty(),
  contactNo: z.string().nonempty(),
  address: z.string().nonempty(),
});

// Define Zod schema for the Student model
const studentValidationSchema = z.object({
  id: z.string().nonempty(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string().nonempty(),
  emergencyContactNo: z.string().nonempty(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string().nonempty(),
  permanentAddress: z.string().nonempty(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).optional(),
});

export default studentValidationSchema;