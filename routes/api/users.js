/** @format */

const express = require('express');
const { validateBody, authenticate } = require('../../middlewares');
const { favoriteSchema } = require('../../models');
const { changeSubscription } = require('../../controllers');
const { ctrlWrapper } = require('../../utils');

const usersRouter = express.Router();

usersRouter.patch('/', authenticate, validateBody(favoriteSchema), ctrlWrapper(changeSubscription));

module.exports = usersRouter;
