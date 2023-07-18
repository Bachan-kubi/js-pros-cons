// let allText = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals"
// let lessText = document.getElementById('more').innerHTML;

function more(){
    let more = document.getElementById('more');
    let less = document.getElementById('less');
    let content = document.getElementById('content');
    // more.innerHTML = allText;
    more.style.display='none'
    less.style.display = 'block';
    // added to make the show more and less smooth transition
    content.classList.remove('content-hidden');
    content.classList.add('content-visible');
}

function less(){
    let more = document.getElementById('more');
    let less = document.getElementById('less');
    let content = document.getElementById('content');
    // more.innerHTML = lessText;
    more.style.display = 'inline';
    less.style.display = 'none';
    content.classList.remove('content-visible');
    content.classList.add('content-hidden');
};

function textMore() {
    const showMore = document.getElementById('showMore');
    const showLess = document.getElementById('showLess');
    const showContent = document.getElementById('more-content');
    // showMore.innerHTML = showContent;
    showMore.style.display = 'none';
    showLess.style.display = 'block';
    showContent.classList.remove('txt-hidden');
    showContent.classList.add('txt-visible');
}
function textLess() {
    const showMore = document.getElementById('showMore');
    const showLess = document.getElementById('showLess');
    const showContent = document.getElementById('more-content');
    // showMore.innerHTML = showContent;
    showMore.style.display = 'inline';
    showLess.style.display = 'none';
    showContent.classList.remove('txt-visible');
    showContent.classList.add('txt-hidden');
}

// show full
function showText(){
    let a = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro dolore libero nemo aspernatur explicabo blanditiis deleniti tenetur, fugit, sed illo, animi rerum unde sit vitae. Aut, non fugiat consectetur culpa architecto et accusamus voluptates facilis repellat mollitia quaerat qui obcaecati odit in molestiae, officia quo debitis dolorem. Voluptatibus vel mollitia atque tempora esse rem quidem, excepturi quo autem nihil?';
    let full = document.getElementById('showFull');
    let fullText = document.getElementById('fullText');
    let lessText = document.getElementById('lessText');
    full.innerHTML = a;
    fullText.style.display = 'none';
    lessText.style.display = 'block';
};

function cutText(){
    let full = document.getElementById('showFull');
    let fullText = document.getElementById('fullText');
    let lessText = document.getElementById('lessText');
    full.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    fullText.style.display = 'block';
    lessText.style.display = 'none';
}

function nameList(){
    let b = `<ol>
    <li>kubi</li>
    <li>robi</li>
    <li>chobi</li>
    </ol>`;
    document.getElementById('list').innerHTML = b;
}




