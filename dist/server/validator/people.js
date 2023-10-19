"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPersonValidator = void 0;
const express_validator_1 = require("express-validator");
exports.addPersonValidator = [
    (0, express_validator_1.body)("name")
        .trim()
        .isLength({ min: 3, max: 64 })
        .withMessage("Name is not correct"),
    (0, express_validator_1.body)("website")
        .trim()
        .custom((value) => {
        console.log(value);
        if (value.includes("example.com")) {
            throw new Error("Website cannot be example.com");
        }
        return true;
    }),
];
