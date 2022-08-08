// const BASIC_API = "https://www.supercars.com/news/championship/v8superview-watch-all-races-live"
// async function printFromApi1 () {
//     try{
//         return await fetch(BASIC_API)
//         .then(res=>res.json())
//         .then((result)=>{console.log(result)
//         // result.forEach(element => {
//         //     console.log(element)
//         //     for (let i = 0; i < 20; i++) {
//         //         for (const key in element) {
//         //             colector.innerHTML+=[key]+element[key]
//         //         }
                
//         //     }
//         // });
        
//         })
//     }
    
//     catch (err){
// console.log(err);
//     }
//     finally{

//     }
// }
//     printFromApi1 ()


//     // let berlinMarker = new H.map.Marker({
//     //     lat:52.5192,
//     //     lng:13.4061
//     //   });
//     //   map.addObject(berlinMarker);

    
{/* <script src="https://cdn.auth0.com/js/lock/11.30/lock.min.js"></script> */}

// const BASIC_API = "https://private-74fc7-carsapi1.apiary-mock.com/cars"
// async function printFromApi1 () {
//     try{
//         return await fetch(BASIC_API)
//         .then(res=>res.json())
//         .then((result)=>{
//             stockCars = result.slice(0, 20)
//             console.log(result)
//         // for(let i = 0 ; i < 20 ; i++){
//         //     console.log(result)
//         //     for (const key in result[i]) {
//         //         colector.innerHTML+=`<div class='col-md-3'>${key}<img src='${result.img_url}'/> ${result[i][key]}</div> <br>`

//         //     }
//         // }
//         // result.forEach(element => {
//         //     console.log(element)
//         //     for (let i = 0; i < 20; i++) {
//         //         for (const key in element) {
//         //             colector.innerHTML+=[key]+element[key]
//         //         }
                
//         //     }
//         // });
        
//         })
//     }
    
//     catch (err){
// console.log(err);
//     }
//     finally{

//     }
// }
// printFromApi1()


const BASIC_API = "https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=534a15524f794e81ac0d5a034a0afcd8"
async function printFromApi1 () {
    try{
        return await fetch(BASIC_API)
        .then(res=>res.json())
        .then((result)=>{
    
            console.log(result)
            result.forEach(element => {
                colector.innerHTML+=element
            });
        // for(let i = 0 ; i < 20 ; i++){
        //     console.log(result)
        //     for (const key in result[i]) {
        //         colector.innerHTML+=`<div class='col-md-3'>${key}<img src='${result.img_url}'/> ${result[i][key]}</div> <br>`

        //     }
        // }
        // result.forEach(element => {
        //     console.log(element)
        //     for (let i = 0; i < 20; i++) {
        //         for (const key in element) {
        //             colector.innerHTML+=[key]+element[key]
        //         }
                
        //     }
        // });
        
        })
    }
    
    catch (err){
console.log(err);
    }
    finally{

    }
}
printFromApi1()