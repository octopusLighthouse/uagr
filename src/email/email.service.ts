import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  constructor(
	) {
		this.transporter = nodemailer.createTransport({
			host: `${process.env.APP_SMTP_HOST}`,
			port: Number.parseInt(process.env.APP_SMTP_PORT),
			auth: {
				user: `${process.env.APP_SMTP_USER}`,
				pass: `${process.env.APP_SMTP_PASS}`,
			},
			secure: true,
			tls: {
				rejectUnauthorized: false,
			},
		});
	}

    async sendMail(to: string, subject: string, content: string) {
		const mailOptions = {
		  from: `${process.env.APP_SMTP_EMAIL_FROM}`,
		  to,
		  subject,
		  html: content,
		};
	
		await this.transporter.sendMail(mailOptions);
	}

	template(name: string) {
		return `${name}`;
	}
}
