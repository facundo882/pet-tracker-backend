"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.registerValidator = void 0;
const registerValidator = (_req, res, next) => {
    res.send('register validator');
};
exports.registerValidator = registerValidator;
const loginValidator = (_req, res, next) => {
    res.send("login validator");
};
exports.loginValidator = loginValidator;
