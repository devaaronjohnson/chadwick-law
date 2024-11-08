import nodemailer from 'nodemailer';
import { render } from 'svelte-email';
import { error, redirect } from '@sveltejs/kit';
import Contact from '$emails/Contact.svelte';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const name = data.get('name');
		const phone = data.get('phone');
		const service = data.get('service');
		const message = data.get('message');

		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: 'sociallink.info@gmail.com',
				pass: 'lnfkyrkqpxictiqt',
			},
		});

		const emailHtml = render({
			template: Contact,
			props: {
				name: name,
				email: email,
				phone: phone,
				service: service,
				message: message,
			},
		});

		const options = {
			from: 'connie@conniechadwicklaw.com',
			to: 'aaronis@fastmail.com',
			subject: 'New Contact Form Submission',
			html: emailHtml,
		};

		transporter.sendMail(options);

		throw redirect(303, '/');

		// return { success: true };
	},
};
