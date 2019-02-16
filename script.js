function validateAndRedierct() {
    var name = document.getElementById("userName").value;
    var passw = document.getElementById("pass").value;

    if ((name == "admin" && passw == "adminadmin") || (name == "student" && passw == "student123") || (name == "teacher" && passw == "techer456")) {
        
        sessionStorage.setItem('usertype',name);//to open session to hold name to check in each page if he can to enter this page or no 
        switch (name, passw) {

            case "admin", "adminadmin":
            window.location.href='admin.html';
                /*window.open("admin.html",'_blank') ;*///to open new tab
                break;


            case "student", "student123":
            window.location.href='student.html';
                /*window.open( "student.html",'_blank');*/
                break;

            case "teacher", "techer456":
            window.location.href='teacher.html';
              /*  window.open ("teacher.html",'_blank');*/
                break;
               
              

        }}
        else{
            window.alert("UserName or Password is not valid");
        }


    }
    function checkValidation(){

        var box=document.getElementById("device").checked;
        var box2=document.getElementById("device1").checked;
        var box3=document.getElementById("device2").checked;

        if(box==true){
           window.alert("TeLe");
           /*window.location.href="teacher.html"*/
        }
        else if(box2==true){
            window.alert("Mobile");
        }
        else if(box3==true){
            window.alert("Tablet");
        }
        else{
            window.alert("Please choose");
        }
    }
    





