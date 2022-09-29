let picDiv = document.getElementById("pic_desc_id")     

function init(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "backend/getOnePictureData.php?pic_id=" + window.location.href.split("?")[1] , true);

    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);
            pictures = obj
            
            // Getting the ul element
            picDiv.innerHTML = "";
            // console.log(window.location.href.split("?")[1])
            // for (pic in obj) {
            //    if( obj[pic].photo_id == window.location.href.split("?")[1] ){
               
            //    }
            // }
            console.log(obj)
            picDiv.innerHTML += `<div class="card-body main-card-text">
                <h5 class="card-title main-card-title"> ${obj.title} </h5>
                <p class="card-text main-card-desc">
                    ${obj.desc} 
                </p>
                <a href="gallery.html" class="btn main-card-btn">Go Gallery</a>
            </div>
            <div class="card-body  main-card-image">
                <img src="${obj.url} " width="100%">
            </div>`
            
        }
        else {
            console.log("File not found");
        }
    }
    
    // At last send the request
    xhr.send();
}
