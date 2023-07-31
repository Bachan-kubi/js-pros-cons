let countries = ['Bangladesh', 'India', 'Japan', 'USA'];
let html = countries.map(c=>
    `<label for="con-${c}">
        <input type="checkbox" name="country" id="con-${c}" value="${c}"> ${c}
    </label>`
).join(' ')

let country = document.getElementById('country');

country.innerHTML = html;