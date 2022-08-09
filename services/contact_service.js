const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd06bf7dae9mshb86224ce8b132a5p1a282ajsn42f9d2f2764e',
		'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com'
	}
};

fetch('https://google-maps28.p.rapidapi.com/maps/api/place/details/json?fields=address_component%2Cadr_address%2Cbusiness_status%2Cformatted_address%2Cgeometry%2Cicon%2Cicon_mask_base_uri%2Cicon_background_color%2Cname%2Cpermanently_closed%2Cphoto%2Cplace_id%2Cplus_code%2Ctype%2Curl%2Cutc_offset%2Cvicinity%2Cformatted_phone_number%2Cinternational_phone_number%2Copening_hours%2Cwebsite%2Cprice_level%2Crating%2Creview%2Cuser_ratings_total&place_id=ChIJ37HL3ry3t4kRv3YLbdhpWXE&language=en&region=en', options)
	.then(response => response.json())
	.then(data => console.log(data.result))
	.catch(err => console.error(err));