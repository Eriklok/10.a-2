
function myFunction()
{
    let name = document.getElementById("input_name");
    let h1_name = document.getElementById("name");
    let Surname = document.getElementById("input_surname");
    let age = document.getElementById("input_age");


   h1_name.innerText = "Hello,"+ name.value + " " + Surname.value;
   
  

if(name.value == "" || !name.value.match( /[A-z]/ )) 

    {
        alert("Error: Noname?");
       }
else
       {
        alert(name.value);
       }

       if(Surname.value == "" || !Surname.value.match( /[A-z]/ )) 

        {
            alert("Error: Nosurname?");
               return 
   
           }
    else
           {
            alert(Surname.value);
           }

/*
    alert(name.value+ " is " + age.value + " " + "y.o.");
*/

   if(age.value <=0 || age.value == "" || !age.value.match( /[0-9]/ )) 

   
   
   {
   alert("Error: Are you sure?");
   return;
   }

   else
   {
    alert(name.value+ " is " + age.value + " " + "y.o.");
   }

   let table = document.getElementById("myTable");
   let row = table.insertrow();
   
   let  cell1 = row.insertCell();
   let cell2 = row.insertCell();
   let cell3 = row.insertCell();
   
   cell1.innerHTML = name.value;
   cell2.innerHTML = Surname.value;
   cell3.innerHTML = age.value;

}

