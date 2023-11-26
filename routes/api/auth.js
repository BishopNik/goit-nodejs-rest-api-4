/** @format */

const express = require('express');
const { validateBody } = require('../../middlewares');
const { registerSchema, loginSchema } = require('../../models');
const { register, login } = require('../../controllers');
const { ctrlWrapper } = require('../../utils');

const authRouter = express.Router();

authRouter.post('/register', validateBody(registerSchema), ctrlWrapper(register));

authRouter.post('/login', validateBody(loginSchema), ctrlWrapper(login));

module.exports = authRouter;
