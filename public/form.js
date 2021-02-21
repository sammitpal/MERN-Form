
const email = document.getElementById('email');
const name = document.getElementById('name');
const mform = document.getElementById('mform');
  mform.addEventListener("submit", function(e){
    e.preventDefault();
        const person = name.value;
        const mail = email.value;
    
    mform.reset();
    formData(person, mail);
  });

  async function formData(person, mail){
    const obj = {
        name: person,
        mail: mail
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    const response = await fetch('/results', options);
    const data = await response.json();
    console.log(data);
  }