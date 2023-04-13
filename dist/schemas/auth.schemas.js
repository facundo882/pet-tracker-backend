"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    username: zod_1.z.string().nonempty('Username is required').min(6),
    password: zod_1.z.string().nonempty('Password is required').min(6)
});
exports.registerSchema = zod_1.z.object({
    username: zod_1.z.string().nonempty('Username is required').min(6),
    password: zod_1.z.string().nonempty('Password is required').min(6),
    email: zod_1.z.string().nonempty('Email is required').email()
});
