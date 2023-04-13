var elements = document.querySelectorAll(".thumbnail");

window.addEventListener ( "load", function() {
    let captions = document.getElementsByTagName("figcaption");
    let secondCaption = captions[1].innerHTML
    elements[1].tabIndex = 0;
    alert(secondCaption);
})

elements.forEach(el => el.addEventListener('mouseover', event => {
    let purpleSquare = document.getElementById("display")
    purpleSquare.style.backgroundImage = `url(${el.src})`;
    el.style.visibility = "hidden";
    purpleSquare.innerHTML = el.alt;
}));


elements.forEach(el => el.addEventListener('mouseout', event => {
    el.style.visibility = "visible";
    let purpleSquare = document.getElementById("display")
    purpleSquare.style.backgroundImage = 'none';
    purpleSquare.innerHTML = "Hover over an image below to display the image and the alt text.";
}));

elements.forEach(el => el.addEventListener('focus', event => {
    let purpleSquare = document.getElementById("display")
    purpleSquare.style.backgroundImage = `url(${el.src})`;
    el.style.visibility = "hidden";
    purpleSquare.innerHTML = el.alt;
}));

elements.forEach(el => el.addEventListener('blur', event => {
    el.style.visibility = "visible";
    let purpleSquare = document.getElementById("display")
    purpleSquare.style.backgroundImage = 'none';
    purpleSquare.innerHTML = "Hover over an image below to display the image and the alt text.";
}));