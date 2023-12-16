// const dom = document.getElementById("dom");

// dom.addEventListener("click", function () {
//   console.log("first");
//   dom.classList.add("d");
// });

function spinalCase(str) {
  const r = str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
//   const r = str.split(" ").join("-").toLowerCase();
  console.log(r);
  // return str.split();
}

spinalCase("This Is Spinal Tap");
