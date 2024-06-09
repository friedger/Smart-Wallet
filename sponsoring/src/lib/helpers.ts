/**
 * readRequestBody reads in the incoming request body
 * Use await readRequestBody(..) in an async function to get the string
 * @param {Request} request the incoming request to read from
 */
export async function readRequestBody(request: Request) {
	const contentType = request.headers.get('content-type');
	if (contentType === null) {
	} else if (contentType.includes('application/json')) {
		return await request.json();
	}

	return undefined;
}
