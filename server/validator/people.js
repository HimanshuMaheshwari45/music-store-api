import { body } from "express-validator";

export const addPersonValidator = [
  body("name")
    .trim()
    .isLength({ min: 3, max: 64 })
    .withMessage("Name is not correct"),
  body("website")
    .trim()
    .custom((value) => {
        console.log(value);
      if (value.includes("example.com")) {
        throw new Error("Website cannot be example.com");
      }
      return true;
    }),
];
