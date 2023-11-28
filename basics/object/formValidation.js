// function formValidation(e) {
//   console.log(e);
//   e.preventDefault();
//   let form = e.target;
//   let name = form.name.value;
//   let email = form.email.value;
//   let password = form.password.value;

//   // 01
//   // if(!name || !email || !password){
//   //     console.log('put name first');
//   //     return false;
//   // }

//   // 02
//   if (name === "" || email === "" || password === "") {
//     console.log("put name first");
//     form.name.focus();
//     form.email.focus();
//     form.password.focus();
//     form.name.style.background = 'yellow';
//     form.email.style.background = 'yellow';
//     form.password.style.background = 'yellow';
//     return false;
//   }
//   form.name.style.background = 'red';
//     form.email.style.background = 'red';
//     form.password.style.background = 'red';
//   console.log(name, email, password);
//   form.name.value = "";
//   form.email.value = "";
//   form.password.value = "";
// }

// dropdown menu

function handleDropdown(e) {
  e.preventDefault();
  console.log(e);
  let dropdown = document.getElementById("country");
  let selectedValue = dropdown.value;
  if (selectedValue === "") {
    console.log("Please select a country.");
    return false;
  } else {
    console.log("Selected country:", selectedValue);
  }
  console.log(selectedValue);
}

// radio button
function buttonHandle(e) {
  e.preventDefault();
  let radioButtons = document.getElementsByName('p');
  console.log(radioButtons)
  let selectedValue = "";
  for(let i=0; i<radioButtons.length; i++){
    if(radioButtons[i].checked){
      selectedValue = radioButtons[i].value;
      break;
    }
  }
  if(!selectedValue){
    console.log("pls select one!");
    return false;
  }
  console.log(selectedValue);
}
