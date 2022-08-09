const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '893c074667msh97f09d6735f705ap123714jsne428339ccc11',
		'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
	}
};
const tbody_id = document.getElementById("tbody_id")
async function printDataTimes (){
     try {
        return await fetch("https://f1-live-motorsport-data.p.rapidapi.com/races/2020", options)
            .then(response => response.json())
            .then(data =>data.results.forEach(element => {
                tbody_id.innerHTML+=`
                <tr>
                <td >${element.name}</td>
                <td >${element.country}</td> 
                <td >${element.start_date}</td> 
                <td >${element.season}</td>  
                </tr>
                `
            }))
}
catch{

}
finally{

}
}
printDataTimes()