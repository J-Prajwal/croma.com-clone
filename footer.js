document.querySelector("#footbtn").addEventListener("click",myFunction);

    function myFunction(){
        document.querySelector("#footinp").placeholder="Invalid Email Address";
        document.querySelector("#footinp").value="";
    }