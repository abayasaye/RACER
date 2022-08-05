const BASIC_API = "https://motorsportstats.com/team/api-motorsport/summary/series/british-touring-car-championship"
async function printFromApi () {

    try{
        return await fetch(BASIC_API )
        .then(res=>res.json())
        .then((result)=>{console.log(result)
            // load.innerHTML=`<img src="/images/load.gif"`
            // for (let i = 0 ; i < 20 ; i++){
            //     for (const key in result[i]) {
            //         colector.innerHTML+=`<div class='col-md-3'>${result[i].DriverID}${result[i].FirstName}${result[i].LastName}<img class='w-25' src='${result[i].PhotoUrl}'/>${result[i][key]}${result[i].Number}</div> <br>`;
            //     }
            // }
            // result.forEach(element => {
            //     console.log(element);
            //     for (const key in element) {
            //         colector.innerHTML+=`${key} ${element.DriverID} ${element.FirstName}${element.PhotoUrl}`;
            //     }
            // });

//             for(let i = 0 ; i<10 ; i++){
//                 console.log(result[i]);
//                 for (let key in result[i]) {
//                     div_col.innerHTML =`<div class='card'> <div> <img  class='card-img' style='width:10vw;' src='${result[i].PhotoUrl}'/></div><div class='card-text'>${key}: ${result[i].driverID}${key}: ${result[i].firstName}${key}: ${result[i].lastName}${key}: ${result[i].Number}${key}: ${result[i].Team}${key}: ${result[i].Manufactuar} <br> </div></div><br>`;
//                 }
//             //     div_col.innerHTML += `<img  class='card-img' style='width:10vw;' src='${result[i].PhotoUrl}'/>`
//             //     colect_div.innerHTML +=`<div style='font-size:1.5rem;color:#000; background :none;' class='card my-5 col-lg-4 col-sm- bg-white'> <div> <img class='card-img w-75' src = '../IMAGES/IMGESARRAY/${phonesArray[index]}'/></div><br><div class='text-center' style='background:#aeccfb;'>price :${item.price}$<br>isAvailable : ${item.isAvailable}<br>createdAt : ${item.createdAt}<br>color : ${item.color}<br>brand : ${item.brand}<br>ram : ${item.ram}G<br></div></div> <br>`
// //             result[i].forEach(item => {
// // console.log(item);
// //                     for (const key in item) {
// //                         div_col.innerHTML +=`${item[key]}<br>`;
// //                     }
// //                     div_col.innerHTML += `<img src='${item.img_url}'/>`
// //             })
//         }
        
    })
    }
    catch (err){
console.log(err);
    }
    finally{
        load.innerHTML=" "

    }
}
    printFromApi ()