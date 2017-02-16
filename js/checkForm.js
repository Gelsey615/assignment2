function checkForm(){
   var inputs = document.getElementsByTagName("input");
	 for(var i = 0; i < inputs.length-1; i++)
   {
     if(inputs[i].value==("")){
        alert("Please enter a value for the required field " + inputs[i].name);
        return false;
     }
		 if(inputs[i].name==("Gender")&&inputs[i].value!=("Female")&&inputs[i].value!=("Male")){
        alert("Please enter Female or Male for " + inputs[i].name);
        return false;
     }
	 }
   alert("Thanks for completing the survey!");
   return true;
}
