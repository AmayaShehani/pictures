

function user_register(){
    const xhr = new XMLHttpRequest();
    console.log("http://localhost:8080/picture/backend/register.php?email=" + 
    document.getElementById("email").value + "&password=" + 
    document.getElementById("password").value + "&name=" + 
    document.getElementById("name").value)
    xhr.open("GET", "backend/register.php?email=" + 
            document.getElementById("email").value + "&password=" + 
            document.getElementById("password").value + "&name=" + 
            document.getElementById("name").value, true);

    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);
           
            if(obj.status == "success"){
                console.log(obj.message);
                window.location.replace("login.html");
                return;
            }
            
        }
        else {
            console.log("File not found");
        }

        
    }
    
    // At last send the request
    xhr.send();
}

