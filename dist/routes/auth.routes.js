"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controller/auth.controller");
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
const verifyData_middleware_1 = require("../middlewares/verifyData.middleware");
const router = express_1.default.Router();
router
    .post('/signin', verifyData_middleware_1.loginValidator, auth_controller_1.signin)
    .post('/signup', verifyData_middleware_1.registerValidator, auth_controller_1.signup)
    .get('/profile', verifyToken_middleware_1.tokenValidation, auth_controller_1.profile);
exports.default = router;
