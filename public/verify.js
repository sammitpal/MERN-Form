const email = document.getElementById('email');
const name = document.getElementById('name');
async function formData(person, mail){
    const response = await fetch('/results');
    const data = await response.json();
    email.innerText=data.email;
    name.innerText=data.name;
  }