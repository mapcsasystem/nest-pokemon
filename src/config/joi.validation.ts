import * as Joi from 'joi';

export const JoinValidationSchema = Joi.object({
  MONGO_DB_URI: Joi.required(),
  PORT: Joi.number().default(3000),
});
