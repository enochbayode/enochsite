const joi = require("joi");
const { Utils } = require("./utils");
const utils = new Utils();

const validation = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().max(10).min(5).required(),
});

// .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

const userValidation = async (req, res, next) => {
  try {
    const validated = validation.validate(req.body);
    console.log(req.body)
    if (validated.error) {
      res.status(400);
      return res.json({
        error: utils.getMessage("DATA_VALIDATION_ERROR"),
      });
    }

    res.status(200, 'successfully validated');
    
    next();
  } catch (error) {
    console.log(error);
  }
};

const loginValidation = joi.object({
  email: joi.string().email().trim(true).required(),
  password: joi.string().min(5).required(),
});

const logInValidate = async (req, res, next) => {
  try {
    const validUser = loginValidation.validate(req.body);
    if (!validUser) {
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

module.exports = {
  userValidation,
  logInValidate,
};
