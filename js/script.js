function getAkanName(){
    var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames =["Kwasi","Kwando","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleAkanNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var myBirthday = document.getElementById("dateofbirth").value;
    var myGender =document.getElementsByName("gender");
    var dateofBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday===""){
        document.getElementById('message').innerHTML ="<div> You DIdn't Submit a Valid Date!</div>";
    }
}