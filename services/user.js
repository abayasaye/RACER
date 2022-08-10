const usersPicturesArr = [
    "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col-retina/image.png",
    "https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col-retina/image.png",

  ]
const manuArray = [
    "mercedes-benz",
    "mercedes-benz",
    "ferrari",
    "red bull",
    "red bull",
    "mercedes-benz",
    "ferrari",
    "mclaren",
    "dodge",
    "bugatti",
    "dodge",
    "chevrolet",
    "chevrolet",
    "ford",
    "maserati",
    "mclaren",
    "bugatti",
    "shelby",
    "aston martin",
    "aston martin"

]



const BASIC_API = "https://api.sportsdata.io/nascar/v2/json/drivers?key=85fecc4ef0fb4492a0b2915ea02d7a28"
async function printFromApi () {

    try{
        return await fetch(BASIC_API )
        .then(res=>res.json())
        
    }
    catch (err){
        console.log(err);
    }
    finally{
        
    }
}
function getPrintRacer(){

    load_div.innerHTML="<img src='../../images/load.gif'/>"
    printFromApi ()
    .then((result)=>{console.log(result)
        for (let i = 0 ; i < 20 ; i++){
            colector_racer.innerHTML+=`<div class='col-md-3 m-2 text-center bg-light rounded'><img class=' w-100' src='${usersPicturesArr[i]}'/><div class=' fs-4'><p>firstname : ${result[i].FirstName} <br> lastname : ${result[i].LastName} <br> driverID : ${result[i].DriverID} <br> Manufacturer : ${manuArray[i]} </p><br> </div>`
        }
    
        })
        .catch((err)=>{
            alert(`no drivers: ${err}`)
        })
        .finally(()=>{
            load_div.innerHTML = " "
        })
}
getPrintRacer() 

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd06bf7dae9mshb86224ce8b132a5p1a282ajsn42f9d2f2764e',
// 		'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
// 	}
// };

// fetch('https://f1-live-motorsport-data.p.rapidapi.com/races/2020', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));