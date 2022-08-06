const BASIC_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users"
const usersPicturesArr= [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fcelebs.infoseemedia.com%2Fwp-content%2Fuploads%2F2020%2F10%2FLewis-Hamilton.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fcelebs.infoseemedia.com%2Fwp-content%2Fuploads%2F2020%2F10%2FLewis-Hamilton.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fcelebs.infoseemedia.com%2Fwp-content%2Fuploads%2F2020%2F10%2FLewis-Hamilton.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fcelebs.infoseemedia.com%2Fwp-content%2Fuploads%2F2020%2F10%2FLewis-Hamilton.png&f=1&nofb=1",
    "https://i.pinimg.com/736x/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg",
    "https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/157765614-profile-picture-of-smiling-indian-female-isolated-on-grey-studio-background-show-optimism-and-positi.jpg?ver=6",
    "https://buffer.com/library/content/images/2022/03/amina.png",
    "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
    "https://i.insider.com/59b6c4bfba785e36f932a317?width=600&format=jpeg&auto=webp",
    "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
    "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=",
    "https://media.istockphoto.com/photos/portrait-of-successful-black-male-modern-day-student-holding-picture-id1311634222?k=20&m=1311634222&s=612x612&w=0&h=1a0XDWnZNPjk_5n7maZdzowaDfBcBohwoiZZF69qS9A=",
    "https://chicagophotovideo.com/wp-content/uploads/2018/01/professional-headshots-for-linkedin-chicago-1024x1024.jpg",
    "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/02/Website-Photo-11-1.jpg",
    "https://i.pinimg.com/736x/42/57/dd/4257dd317ad8c667d62b47acd041788c.jpg"
  ]
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
            result.forEach(element => {
                console.log(element);
                for (const key in element) {
                    colector.innerHTML+=`${key}${element[key].picture=<img class='w-50' src = '${usersPicturesArr[index]}'/>}`;
                }
            });

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