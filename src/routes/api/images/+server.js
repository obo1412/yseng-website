import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET() {
	const imageDir = path.resolve('static/indexPicture');
	try {
		const files = fs.readdirSync(imageDir);
		const images = files.map((file) => `/indexPicture/${file}`);
		return json(images);
	} catch (error) {
		console.log(error);
		return json({ error: 'Failed to read images' }, { status: 500 });
	}
}
