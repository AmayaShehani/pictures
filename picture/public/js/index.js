let carousel_container = document.getElementById("carousel_container")     

function init(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "backend/getPicturesData.php", true);

    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(JSON.parse(this.responseText)).slice(2);
            console.log(obj)
            for (pic in obj) {
                console.log(obj[pic])
               if(pic == 0){
                carousel_container.innerHTML += `<div class="carousel-item active" data-bs-interval="4000"  >
                    <div class="card-body main-card-container d-flex  align-items-center  ">
                        <div class="card-body main-card-text">
                            <h5 class="card-title main-card-title"> ${obj[pic].title} </h5>
                            <p class="card-text main-card-desc">
                                ${obj[pic].desc} 
                            </p>
                            <a href="gallery.html" class="btn main-card-btn">Go Gallery</a>
                        </div>
                        <div class="card-body  main-card-image">
                            <img src="${obj[pic].url} " width="100%">
                        </div>
                    </div>
                </div>`
               }else{
                carousel_container.innerHTML += `<div class="carousel-item " data-bs-interval="4000"  >
                    <div class="card-body main-card-container d-flex  align-items-center  ">
                        <div class="card-body main-card-text">
                            <h5 class="card-title main-card-title"> ${obj[pic].title} </h5>
                            <p class="card-text main-card-desc">
                                ${obj[pic].desc} 
                            </p>
                            <a href="gallery.html" class="btn main-card-btn">Go Gallery</a>
                        </div>
                        <div class="card-body  main-card-image">
                            <img src="${obj[pic].url} " width="100%">
                        </div>
                    </div>
                </div>`
               }
             }
            
        }
        else {
            console.log("File not found");
        }
    }
    
    // At last send the request
    xhr.send();
}
