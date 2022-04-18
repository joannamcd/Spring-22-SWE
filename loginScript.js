function sendForm() 
{

    let form = document.forms['logInForm'];


	console.log("Here are the values from the form:")

    console.log(form['username'].value);
    console.log(form['password'].value);
	
	//return false;

}

// for debugging purposes

function autofillForm() 
{
    let form = document.forms['logInForm']; 
	form['username'].value = 'username';
    form['password'].value = 'Hello1234!';

}

function myVisibilityFunction() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


	
function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
    
    const results = document.querySelector('.results pre');
    //results.innerText = JSON.stringify(formJSON, null, 2);
    //console.log(JSON.stringify(formJSON, null, 2));
    const newUserData = JSON.stringify(formJSON, null, 2);
    console.log(newUserData);
    sendOrder(newUserData);
  }
  
  const form = document.querySelector('.login-form');
  form.addEventListener('submit', handleFormSubmit);
  



  function sendOrder(newUserData) {
    const url = "https://demand.team23.sweispring22.gq/login";
    var info = newUserData;
  
    const params = {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: info,
      method: "POST",
    };
  
    fetch(url, params)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  
  }  