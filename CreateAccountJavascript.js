function validateForm() 
{
	//validatePassword()
    let form = document.forms['createAccountForm'];
 
	console.log("Here are the values from the form:")
    console.log(form['firstName'].value);
    console.log(form['lastName'].value);
    console.log(form['phone'].value);
    console.log(form['email'].value);
    console.log(form['username'].value);
    console.log(form['password'].value);
    console.log(form['confirmation'].value);

 
    if (form['password'].value != form['confirmation'].value) 
	{
        console.log("Passwords dont match");
		alert("The passwords dont match")
		document.getElementById("pword").reset();
		document.getElementById("pword2").reset();
		

    }

    //return false;

}




var confirmPassword = document.forms['createAccountForm']['confirmation'];

var Pword = document.forms['createAccountForm']['password'];


function validatePassword(){
  if(Pword.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match***************");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

Pword.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;







// uncomment this on the html out of convenience
function autofillForm() {


    let form = document.forms['createAccountForm']; 

    form['firstName'].value = 'FirstName';
    form['lastName'].value = 'LastName';
    form['email'].value = 'a@a.com';
    form['password'].value = 'Hello1234!'; 
    form['confirmation'].value = 'Hello1234!';
    form['phone'].value = '1234567891';
	form['username'].value = 'username';
	
}