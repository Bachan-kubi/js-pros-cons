let form = document.getElementById('forms');
// used method with addEventListener
form.addEventListener('submit', handleEvent);

// callback fucntion to capture and send data to 
function handleEvent(e){
    e.preventDefault();
    console.log(e);
    let form = e.target;
    let name = form.name.value;
    let lname = form.lname.value;
    let email = form.email.value;
    let password = form.password.value;
    if(!name || !email || !password){
        console.log('Please put right value!');
        alert('Please put right value!');
        return;
    }else{
        console.log('Data is submitted!')
        alert('Data is submitted!')
    };
    console.table("name:", name,"lastName:", lname, "email", email, "password:",  password);
    form.reset();
   
}
