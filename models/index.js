/** @format */

const { Contact, contactAddSchema } = require('./contact');
const { User, registerSchema, loginSchema, favoriteSchema } = require('./user');

module.exports = {
	Contact,
	contactAddSchema,
	User,
	registerSchema,
	loginSchema,
	favoriteSchema,
};
