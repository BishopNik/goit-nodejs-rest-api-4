/** @format */

const { Schema, model } = require('mongoose');
const Joi = require('joi');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const contactSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Set name for contact'],
		},
		email: {
			type: String,
			match: emailRegexp,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		favorite: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false, timestamps: true }
);

contactSchema.post('save', (err, _data, next) => {
	err.status = 400;
	next();
});

const contactAddSchema = Joi.object({
	_id: Joi.string(),
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegexp).required(),
	phone: Joi.string().required(),
	favorite: Joi.boolean(),
});

const contactFavoriteSchema = Joi.object({
	favorite: Joi.boolean().required(),
});

const Contact = model('contact', contactSchema);

module.exports = {
	Contact,
	contactAddSchema,
	contactFavoriteSchema,
};
