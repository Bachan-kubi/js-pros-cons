
thumbs.onclick = function(event){
    console.log(event.target)
    let thumbnail = event.target.closest('a');
    console.log(thumbnail)
    console.log("thumbnail capture",thumbnail.href, thumbnail.title, "title");
    if(!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
};

function showThumbnail(href, title){
    largeImg.src = href;
    largeImg.title = title;
    console.log(largeImg.src)
};

function noed(){
    console.log('j')
}

// The provided code runs without accessing the thumbs and largeImg IDs directly in JavaScript because it uses event delegation. In this code, the event listener is not attached directly to the thumbs and largeImg elements. Instead, it is attached to a common ancestor of all the thumbnail images (thumbs), and the event.target property is used to determine which specific thumbnail was clicked.

// Let's break down the code:

// The HTML contains an unordered list with class "photos" and ID "thumbs". This list contains several list items, each containing an anchor element (<a>) with an image (<img>) inside.

// The JavaScript code uses event delegation to listen for clicks on the common ancestor element, which is the unordered list (thumbs).

// When a click event occurs on any element inside the thumbs element, the event listener's callback function (thumbs.onclick) is executed.

// Inside the callback function, the event.target property is used to get the actual element that triggered the click event (i.e., the thumbnail image link that was clicked). The event.target points to the lowest-level element that was clicked within the thumbs element.

// The closest('a') method is then used to find the nearest ancestor of the clicked element that is an anchor element (<a>). This ensures that even if the click occurred on the image itself (inside the anchor), the anchor element is still selected.

// If the closest('a') method returns a valid anchor element (thumbnail), the showThumbnail function is called with the href (URL of the large image) and title attributes of the thumbnail.

// The showThumbnail function updates the src and title attributes of the large image (largeImg) with the values obtained from the clicked thumbnail's anchor element.

// By using event delegation in this way, the code avoids directly accessing the thumbs and largeImg elements by ID in JavaScript, making it more efficient and flexible when dealing with dynamic content or large numbers of thumbnails.