const carsArray = [
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2FMclaren%2FMclaren_PNG77.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-yellow-ford-gt-carcarvehicletransportford-961524651071guvne.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F06%2FPNGPIX-COM-Vencer-Sarthe-Super-Speed-Car-PNG-Image.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F06%2FPNGPIX-COM-Ford-GT-Blue-Super-Car-PNG-Image.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdi-uploads-pod6.dealerinspire.com%2Fmclarenhouston%2Fuploads%2F2017%2F04%2F720s-Azores-hero.png&f=1&nofb=1",
    "https://pngimg.com/uploads/bugatti/bugatti_PNG29.png",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F5%2FLamborghini-Gallardo-PNG-HD.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fmaserati%2Fmaserati_PNG103.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff9%2F2d%2F9c%2Ff92d9cab6f41e588b8dfdd06ce32a85d.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fbugatti-veyron-png--2289.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fmercedes%2Fmercedes_PNG80159.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7c%2Ff4%2F50%2F7cf4503b9fcc26898b76a4587a945136.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F06%2FPNGPIX-COM-Aston-Martin-DB10-Silver-Car-PNG-Image.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F06%2FPNGPIX-COM-Jaguar-F-TYPE-Luxury-Sports-Blue-Car-PNG-Image.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ymmZk7fNGWzKm2KHjwMofAHaDh%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F06%2FPNGPIX-COM-Yellow-Chevrolet-Corvette-Z06-C7-Car-PNG-Image.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F06%2FPNGPIX-COM-Chevrolet-Corvette-427-Convertible-Car-PNG-Image.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsnipstock.com%2Fassets%2Fcdn%2Fpng%2F04416c286a4ed1ca03a0b261995532b0.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2p2bboli8d61fqhjiqzb8p1a-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F12%2FDemon-Png-Small.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F53%2F25%2F72%2F532572dd9912c378cc31e048ff42cb04.png&f=1&nofb=1"
]



const BASIC_API = "https://private-74fc7-carsapi1.apiary-mock.com/cars"

async function printFromApi1 () {
    try{
        return await fetch(BASIC_API)
        .then(res=>res.json())
 
    }
    
    catch (err){
console.log(err);
    }
    finally{

    }
}
   

    function getPrintCars(){
        load_div.innerHTML+="<img src='/images/load.gif'/>"
        printFromApi1 ()
        .then((result)=>{console.log(result)
            for (let i = 0; i < 20; i++) {
             colector.innerHTML+=`<div class='col-md-3 bg-white bg-opacity-100 m-2 text-center rounded-1'><img class=' w-100' src='${carsArray[i]}'/><p class='fs-5'>year : ${result[i].year} <br> make : ${result[i].make} <br> model : ${result[i].model} <br> horsepower : ${result[i].horsepower} <br> price : $${result[i].price}</p> <br>  <button type="sumbit" class="btn btn-primary btn-block mb-4"><a style='text-decoration:none; color:#fff;' href="https://wa.me/972549330466?text=Hello i would like to make an ofer" target="_blank">contact to buy</a></button><div/>   <br>`
                
            }
        // });
        
        })
        .catch((err)=>{
            alert(`no cars: ${err}`)
        })
        .finally(()=>{
            load_div.innerHTML = " "
        })
    
    }
    getPrintCars()


//     // let berlinMarker = new H.map.Marker({
//     //     lat:52.5192,
//     //     lng:13.4061
//     //   });
//     //   map.addObject(berlinMarker);

    


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


// const BASIC_API = "https://api.mapbox.com/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{bbox}|{auto}/{width}x{height}{@2x}"
// // const BASIC_API = "https://timezone.abstractapi.com/v1/current_time/?api_key=673b197ffb404b7a82392430de0253b7&location=Oxford, United Kingdom"
// // const BASIC_API = "https://ipgeolocation.abstractapi.com/v1/?api_key=078ee3a85e21413094886c86ff31f2ce"
// async function printFromApi1 () {
//     try{
//         return await fetch(BASIC_API)
//         .then(res=>res.json())
//         .then((result)=>{
    
//             console.log(result)
//             // result.forEach(element => {
//             //     colector.innerHTML+=element
//             // });
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