function validateForm(){
    var title = document.forms["editMenuItem"]["title"].value;
    if(title == ""){
      alert("Title is required");
      return false;
}
var titleLength = title.length;

if(titleLength<2 || titleLength>65){
    alert("Title should have 2 to 65 characters");
    return false;
}
var price=document.forms["editMenuItem"]["price"].value;
if(isNaN(price)){
    alert("Price has to be a number");
    return false;
}
if (price== ""){
    alert("Price is required");
    return false;
}

var dateOfLaunch = document.forms["editMenuItem"]["dateOfLaunch"].value;
if(dateOfLaunch == ""){
    alert("Date of launch is required");
    return false;
}
if(!dateOfLaunch.match(/^(0[1-9]|[12][0-9]|3[01])[\-\/.](?:(0[1-9]|1[012])[\-\/.](19|20)[0-9]{2})$/)){
alert("Incorrect date format.Expected format (dd/mm/yy)");
return false;
}
var category=document.forms["editMenuItem"]["category"].value;
if(category=="0"){
      alert("Category is required");
      return false;
}
}