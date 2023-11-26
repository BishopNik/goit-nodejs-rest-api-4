/** @format */

const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
	updateContactFavorite,
} = require('./contacts.js');
const { register, login } = require('./auth.js');

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
	updateContactFavorite,
	register,
	login,
};
