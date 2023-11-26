/** @format */

const { Contact, contactAddSchema, contactFavoriteSchema } = require('./contact');
const { User, registerSchema, loginSchema } = require('./user');

module.exports = {
	Contact,
	contactAddSchema,
	contactFavoriteSchema,
	User,
	registerSchema,
	loginSchema,
};
