function akan(){
    let day=document.getElementById("day").value;
    let month=document.getElementById("month").value;
    let year=document.getElementById("year").value;
    let gender=document.getElementById('gender').value;
    // let male=document.getElementById('male').value;
    // let female=document.getElementById('female').value;
    let akanMales=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let akanFemales=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


     // var day=document.getElementById('date').innerHTML=dob.getDay();
    // var month=document.getElementById('date').innerHTML=dob.getMonth();
    // var year=document.getElementById('date').innerHTML=dob.getFullYear();




    if(year>=1000&&year<2021){
        if(month==2&&year%4==0&&day>=29){
            document.write("February has 29 days in a leap year");
        }
        else if(month==2&&day>28){
            document.write("February has 28 days");
        }
        else if(month>=1&&month<13){
            if(day>=1&&day<31){
               let date = new Date(year,month,day);
                if(gender=="male"){

                    let date1=akanMales[date.getDay()];
                    // location.href="output.html";
                    alert("Your Akan Name Is  " + date1);
                    // location.href="output.html";
                    
                   
                }
                else{
                let date2=akanFemales[date.getDay()];
                // location.href="output.html";
                alert("Your Akan Name Is  " + date2);
                // location.href="output.html";
              
                
                }

            }
            else{
                alert("enter valid day");
            }
        }
        else{
            alert("enter valid month");
        }
    }
    else{
        alert("enter valid year");
    }

 }
