let picDiv = document.getElementById("pic_desc_id")     

function login_check(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "backend/login.php?email=" 
    + document.getElementById("email").value + 
    "&password=" + document.getElementById("password").value , true);

    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);
            console.log(obj)
            if( obj.status == "success" ){
                sessionStorage.setItem("user", obj.data.name);
                window.location.replace("index.html");
            }else if( obj.status == "fail" ){
                document.getElementById("password").value = " ";
                document.getElementById("email").value = " ";
            }
            
        }
        else {
            console.log("File not found");
        }
    }
    
    // At last send the request
    xhr.send();
}
