window.addEventListener("load", function() {
    let text = document.getElementById("billing").innerHTML
    console.log(text)
})

document.querySelector("input[type=checkbox]").addEventListener( "click", function () {
    console.log("toggled");
    let checkbox = document.querySelector("input[type=checkbox]");
    let homeText = document.getElementById('home');
    let billingText = document.getElementById("billing").innerHTML;
    if (checkbox.checked) {
        homeText.innerHTML = billingText;
    } 
    else {
        homeText.innerHTML = '';
    }
} 
)