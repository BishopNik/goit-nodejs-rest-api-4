/** @format */

const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
} = require('./contacts.js');
const { register, login, logout, getCurrent } = require('./auth.js');
const { changeSubscription } = require('./users.js');

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
	changeSubscription,
	register,
	login,
	logout,
	getCurrent,
};
