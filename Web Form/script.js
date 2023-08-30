let logindata = document.getElementById("data-form");
var firstName,lastName,gender,foodCheck,Address,State,Country,Pincode;

logindata.addEventListener("submit", (e) => {
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    gender = document.querySelector("input[name='gender']:checked").value;
    foodCheck=document.querySelectorAll("input[type='checkbox']:checked");
    Address=document.getElementById("address").value;
    State=document.getElementById("state").value;
    Country=document.getElementById("country").value;
    Pincode=document.getElementById("pincode").value;

    let foodChecked=[]
    if (foodCheck.length<2){
        alert("Select atleast two food types")
        return;
    }
    else{
        for(var i=0;i<foodCheck.length;i++){
            foodChecked.push(foodCheck[i].value);
    }}
    logindata.reset();
    logic(firstName,lastName,gender,foodChecked,Address,State,Country,Pincode);
});

function logic(firstName,lastName,gender,food){
    let tab=document.getElementById("trcon");
    tab.innerHTML +=`<tr><td>${firstName}</td><td>${lastName}</td><td>${gender}</td><td>${food}</td><td>${Address}</td>
                <td>${State}</td>
                <td>${Country}</td>
                <td>${Pincode}</td></tr>`
}
//document.getElementById("data").innerHTML=allcs;
//export function DataTrans(firstName,lastName,gender);

