const url = 'https://sku-io.p.rapidapi.com/result/45d1528-8983-40d8-b24a-e3a5665531b8';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa0dca409fmshc90ffd3fb017641p16f326jsn4866bbc94dfa',
		'X-RapidAPI-Host': 'sku-io.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}