"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://0.0.0.0:27017/pet-tracker";
mongoose_1.default
    .connect(URI)
    .then(_db => console.log('Database is connected'))
    .catch(err => console.log(err));