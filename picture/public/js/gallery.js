let pictures ;
let divCols = [document.getElementById("col1") ,document.getElementById("col2"),document.getElementById("col3")]            

function init(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "backend/getPicturesData.php", true);

    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);
            obj = JSON.parse(obj);
            
            // Getting the ul element

            let str = "";
            divCols[0].innerHTML = "";
            divCols[1].innerHTML = "";
            divCols[2].innerHTML = "";

            for (pic in obj) {
                divCols[pic%3].innerHTML += `<li> <p> ${obj[pic].title} </p> 
                <a href="picture_desc.html?${obj[pic].photo_id}" title="View More"> 
                <img
                src="${obj[pic].url}"
                class="w-100 shadow-1-strong rounded mb-4"
                
              />
               </a> </li>`
            }
            
        }
        else {
            console.log("File not found");
        }
    }
    
    // At last send the request
    xhr.send();
}
