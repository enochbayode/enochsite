const joi = require("joi");
const { Utils } = require("./utils");
const utils = new Utils();

const validation = joi.object({
  username: joi.string().trim(true).required(),
  email: joi.string().email().trim(true).required(),
  password: joi.string().min(5).required(),
});

const userValidation = async (req, res, next) => {
  try {
    const validated = validation.validate(req.body);
    if (validated.error) {
      res.status(400);
      return res.json({
        error: utils.getMessage("DATA_VALIDATION_ERROR"),
      });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = userValidation;