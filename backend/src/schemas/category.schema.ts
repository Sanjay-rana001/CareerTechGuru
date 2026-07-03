import Joi, { ObjectSchema } from "joi";

const categorySchemaValidate: ObjectSchema = Joi.object().keys({
  _id: Joi.string(),
  id: Joi.string(),
  title: Joi.string().required(),
  basicTitle: Joi.string().required(),
  subCategory: Joi.array().items(Joi.string()),
  shortDescription: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  profilePicture: Joi.string(),
  updatedAt: Joi.date(),
  emailVerified: Joi.boolean(),
  deviceType: Joi.string(),
  browserName: Joi.string(),
  toJSON: Joi.function(),
});
export { categorySchemaValidate };
