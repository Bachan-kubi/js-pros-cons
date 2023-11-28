// let reg = /[A-Z]/;
// let reg = 'bachan';
// let names = 'Bachan Kubi';
// let result = names.search(reg);
// let result = names.indexOf('K');
// console.log(result)

// to count occurance

// let str = 'Do you know you dont know know until you know know!';
// let subStr = 'know';

// let count = 0;
// let index = str.indexOf(subStr);

// while(index !== -1){
//     count++;
//     index = str.indexOf(subStr, index+1)
// };
// console.log(count);

// -2. indexOf Method

// let gbc = 'we are fighting to free freedom fighter! let keep fighting';

// let g = 'fighting';
// let count = 0;
// let index = gbc.indexOf(g);

// while(index !== -1){
//     count++;
//     index = gbc.indexOf(g, index+1)
// };
// console.log(g, count, "times");

// // usage of while loop with indexOf method!
// let codes= 'We want to code and learn how to code with others! people fear of doing code as its hard to do alone! so we ask all garo people to code better way!';

// let c = 'code';
// let h = codes.indexOf(c);
// let cnt = 0;
// console.log(h);

// while(h !== -1){
//     h = codes.indexOf(c, h+1);
//     cnt++;
// }
// console.log(cnt);

// last indexOf
// let names = "bachan";
// let result = names.lastIndexOf('h');
// console.log(result)

// startWith
// let sentences = ' Jack and kubi gone to outside for a walk! ';
// console.log(sentences.startsWith('kubi', 9));
// console.log(sentences.trim());

// let state = 'I love you man';
// let resutl = state.split(' ');

// function getShow(){
//     let show = document.getElementById('show')
//     for(let i = 0; i<resutl.length; i++){
//         console.log(resutl[i]);
//         // show.textContent = resutl[i];
//         console.log(show)
//         if(i<resutl.length){
//             show.textContent = result[i];
//         }
//     }
// };
// getShow();

// let state = 'I love you man';
// let result = state.split(' ');

// function getShow() {
//     let show = document.getElementById('show');
//     let i = 0;

//     function displayWord() {
//         if (i < result.length) {
//             show.textContent = result[i];
//             i++;
//             setTimeout(displayWord, 1500); // Delay of 1000ms (1 second)
//         }
//     }

//     displayWord();
// }

// getShow();

// let state = 'I love you man';
// let result = state.split('');

// function getShow() {
//     let show = document.getElementById('show');
//     let allWords = "";

//     for (let i = 0; i < result.length; i++) {
//         console.log(result[i]); // Log the current word to the console
//         allWords += result[i] + " "; // Concatenate the words with a space in between
//     }

//     show.textContent = allWords; // Update the 'show' element with all words
// }

// getShow();
// let state = 'I love you man';

// function getShow() {
//     let show = document.getElementById('show');
//     let letters = state.split('');

//     for (let i = 0; i < letters.length; i++) {
//         console.log(letters[i]);
//         show.textContent += letters[i]; 
//     }
// }

// replace and replace all

let myName = 'Bachan kobi';
console.log(myName.replace('kobi', "kubi"));



















