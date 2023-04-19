"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const auth_model_1 = __importDefault(require("../models/auth.model"));
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield auth_model_1.default.find();
        if (!users)
            return res.status(400).json({ status: 400, message: 'an error occurred' });
        return res.status(200).json({ status: 200, users });
    }
    catch (error) {
        return res.status(400).json({ status: 404, message: error });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFind = yield auth_model_1.default.findOne({ username: req.params.username });
        if (!userFind)
            return res.status(400).json({ status: 400, message: 'User Not Found' });
        return res.status(200).json({ status: 200, user: userFind });
    }
    catch (error) {
        return res.status(400).json({ status: 400, message: error });
    }
});
exports.getUser = getUser;
const deleteUser = (_req, res) => {
    res.send("delete user");
};
exports.deleteUser = deleteUser;
const updateUser = (_req, res) => {
    res.send("update user");
};
exports.updateUser = updateUser;
