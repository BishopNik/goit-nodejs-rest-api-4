/** @format */

const { Contact } = require('../models');
const { HttpError } = require('../utils');

const listContacts = async ({ user, query }, res) => {
	const { _id: id } = user;

	const { page = 1, perPage = 20, favorite } = query;
	const skip = (page - 1) * perPage;
	const data =
		favorite === undefined
			? await Contact.find({ id }, '-createdAt -updatedAt', {
					skip,
					perPage,
			  }).populate('owner', 'name email')
			: await Contact.find({ id, favorite }, '-createdAt -updatedAt', {
					skip,
					perPage,
			  }).populate('owner', 'name email');

	res.json(data);
};

const getContactById = async ({ params }, res) => {
	const { contactId } = params;
	const data = await Contact.findById(contactId).populate('owner', 'name email');
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json(data);
};

const removeContact = async ({ params, user }, res) => {
	const { contactId } = params;
	const data = await Contact.findByIdAndDelete(contactId);
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json({
		message: 'Delete success',
	});
};

const addContact = async ({ user, body }, res) => {
	const { _id: owner } = user;
	const data = await Contact.create({ ...body, owner });
	res.status(201).json(data);
};

const updateContact = async ({ params, body }, res) => {
	const { contactId } = params;
	const data = await Contact.findByIdAndUpdate(contactId, body, { new: true });
	if (!data) {
		throw HttpError(404, 'Not found');
	}
	res.json(data);
};

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
};
