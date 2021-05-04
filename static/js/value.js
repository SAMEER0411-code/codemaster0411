function val(){
    if (document.getElementById('fname').value == ""){
        alert("Please enter your Name");
        return false;
    }
    else if (document.getElementById('pass').value == "") {
        alert("please Enter Your password");
        return false;
    }
    
    else {
        alert("Signed In Successful!");
        return true;
    }
}