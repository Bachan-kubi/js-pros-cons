const obj = {
    Bangladesh: 'Dhaka', 
    India: 'Delhi', 
    Nepal: 'Kathmandu', 
    Afganistan: 'Kabul', 
    Thailand: 'Bangkok'
 }
for(name in obj){
    console.log(obj[name])
}
 console.dir(Object);
 let properties = Object.values(obj)
 let value = Object.keys(obj)
 console.log(properties, value);

 properties.map(props=>{
    let courtries = document.getElementById('country');
    courtries.innerText += `${props}`;
 });
 value.map(v=>{
    let capital = document.getElementById('capital');
    capital.innerHTML += `${v}`;
    console.log(`Capital name is: ${v}`);
 });