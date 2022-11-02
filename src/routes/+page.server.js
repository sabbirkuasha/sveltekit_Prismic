import * as prismic from '@prismicio/client';
export async function load({ fetch }) {
	const repositoryName = 'sabbirz';
	const accessToken =
		'MC5ZMS1WN0JRQUFMT3FpajdI.du-_vSLvv71577-977-977-977-977-977-9XO-_vXMJOO-_vX5OFu-_vQkq77-9LA3vv73vv71n77-977-977-9';

	const routes = [
		{
			type: 'homepage',
			uid: 'homepage',
			path: '/'
		}
	];
	const clientOptions = {
		fetch,
		accessToken,
		routes
	};

	// These are the query
	const client = prismic.createClient(repositoryName, clientOptions);
	const document = await client.getFirst();

	console.log(document);

	if (document) {
		return {
			body: { document }
		};
	}

	return {
		status: 404
	};
}
