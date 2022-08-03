const BASIC_API = "https://www.supercars.com/news/championship/v8superview-watch-all-races-live"
async function printFromApi1 () {
    try{
        return await fetch(BASIC_API)
        .then(res=>res.json())
        .then((result)=>{console.log(result)
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
    printFromApi1 ()


    // let berlinMarker = new H.map.Marker({
    //     lat:52.5192,
    //     lng:13.4061
    //   });
    //   map.addObject(berlinMarker);

    
{/* <script src="https://cdn.auth0.com/js/lock/11.30/lock.min.js"></script> */}