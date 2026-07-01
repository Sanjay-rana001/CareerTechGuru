import Joi, { ObjectSchema } from "joi";

const userSchemaValidate: ObjectSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    dateOfBirth: Joi.string().isoDate().required(),
    bio: Joi.string().required(),
    experienceInYear: Joi.number().required(),
    alternateNumber: Joi.number(),
    resumeUrl: Joi.string().required(),
    updatedAt: Joi.date(),
    address: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        zip: Joi.string().required(),
        country: Joi.string().required(),
        isPermanent : Joi.boolean()
    }),
    experiences: Joi.array().items(Joi.object({
        title: Joi.string().required(),
        company: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().allow(null),
        isActive: Joi.boolean(),
        description: Joi.string().required()
    })),
    education: Joi.array().items(Joi.object({
        title: Joi.string().required(),
        university: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().allow(null),
        isActive: Joi.boolean(),
        marks: Joi.string().required()
    })),
    interests: Joi.object({
        category: Joi.array().items(Joi.string()).optional(),
        location: Joi.array().items(Joi.string()).optional(),
        jobType: Joi.array().items(Joi.string()).optional()
    }).optional(),
    links: Joi.object({
        website: Joi.string().optional(),
        linkedin: Joi.string().optional(),
        github: Joi.string().optional(),
        twitter: Joi.string().optional(),
        portfolio: Joi.string().optional()
    }).optional()
});

export {userSchemaValidate};