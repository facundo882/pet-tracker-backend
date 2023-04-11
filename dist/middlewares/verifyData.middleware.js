"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const express_validator_1 = require("express-validator");
const registerValidator = () => {
    return [
        (0, express_validator_1.check)('username')
            .exists()
            .not()
            .isEmpty()
            .trim()
            .isLength({ min: 5 }),
        (0, express_validator_1.check)('password')
            .exists()
            .not()
            .isEmpty()
            .isLength({ min: 6 })
            .trim(),
        (0, express_validator_1.check)('email')
            .exists()
            .trim()
            .isEmail()
    ];
};
const Validator = (req, res, next) => {
    const error = registerValidator(req);
    console.log(error);
};
exports.Validator = Validator;
// export const loginValidator = (_req: Request, res: Response, next: NextFunction) => {
//     res.send("login validator");
// }
