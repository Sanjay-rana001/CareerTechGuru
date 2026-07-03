import Joi, { ObjectSchema } from "joi";

const candidateSchemaValidation: ObjectSchema = Joi.object().keys({
  Timestamp: Joi.string().isoDate().required(),
  FirstName: Joi.string().min(1).max(50).required(),
  LastName: Joi.string().min(1).max(50).required(),
  Email: Joi.string().email().required(),
  ContactNumber: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(), // Assuming a contact number is 10 to 15 digits long
  CurrentLocation: Joi.string().min(1).max(100).required(),
  CurrentCompanyName: Joi.string().min(1).max(100).required(),
  InterviewingOtherCompanies: Joi.string().valid("Yes", "No").required(),
  WillingToRelocate: Joi.string().valid("Yes", "No").required(),
  CanAttendWalkInInterview: Joi.string().valid("Yes", "No").required(),
  CurrentSalary: Joi.number().positive().precision(2).required(),
  ExpectedSalary: Joi.number().positive().precision(2).required(),
  InterviewedAtESPSBefore: Joi.string().valid("Yes", "No").required(),
  AppliedAtESPSBefore: Joi.string().valid("Yes", "No").required(),
  BoundByCurrentCompany: Joi.string().valid("Yes", "No").required(),
  NoticePeriod: Joi.string().min(1).max(50).required(), // Adjust min and max as per actual notice period text format
  CanHandleMultipleWork: Joi.string().valid("Yes", "No").required(),
  HandleWorkPressure: Joi.string().valid("Yes", "No").required(),
  TechnicalSkillsRating: Joi.number().min(1).max(10).required(), // Assuming rating is on a scale of 1 to 10
  CommunicationSkillsRating: Joi.number().min(1).max(10).required(), // Assuming rating is on a scale of 1 to 10
  ShortDescription: Joi.string().max(500).optional(),
});

export default candidateSchemaValidation;
