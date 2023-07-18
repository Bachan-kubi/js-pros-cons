function pop(m) {
  document.getElementById("hi").innerHTML = m;
}
function pick() {
  document.getElementById("cl").innerHTML = "I clicked on image!";
}
function changeBg() {
  document.getElementById("email").style.backgroundColor = "yellow";
}
function blur() {
  document.getElementById("email").style.backgroundColor = "red";
  console.log("blur");
}
function thir() {
  document.getElementById("name").style.backgroundColor = "red";
}

// form
// function f(e) {
//   e.preventDefault();
//   let email =document.getElementById('name').value;
//   let name =document.getElementById('email').value;
//   let password =document.getElementById('password').value;
//   console.log(email, name, password);
// }

function f(event) {
  event.preventDefault();
  let p = event.target;
  console.log(event);
  let email = p.elements.email.value;
  let name = p.elements.name.value;
  let password = p.elements.password.value;
  console.log(email, name, password);
}

function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {
    case "60608":
      cityName = "Chicago";
      break;
    case "68114":
      cityName = "Omaha";
      break;
    case "53212":
      cityName = "Milwaukee";
  }
  document.getElementById("city").value = cityName;
};

// function handleForm(e){
//   console.log(e)
//   e.preventDefault();
//   const form = e.target;
//   const name = form.name.value;
//   const email = form.email.value;
//   const password = form.password.value;
//   console.log(name, email, password)
// }

function handleForm(e){
  console.log(e)
  e.preventDefault();
  const form = e.target;
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  // apply with condition
  if(name==="" || email==="" || password===""){
    console.log('Fill the form first!');
    // if you dont put return false it will execute next code too
    return false;
  }
  console.log(name, email, password);
}
