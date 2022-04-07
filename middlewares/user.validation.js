const joi = require("joi");
const { Utils } = require("./utils");
const utils = new Utils();

const validation = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).max(15).min(5).required(),
});

const userValidation = async (req, res, next) => {
  try {
    const validated = validation.validate(req.body);
    
    if (validated) {
      console.log('successful')
      // return res.status(400).json({
      //   error: utils.getMessage("DATA_VALIDATION_ERROR"),
      // });
    }

    // return res.status(200).json({
    //   message: utils.getMessage("CREATE_SUCCESS")
    // });

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = userValidation;
