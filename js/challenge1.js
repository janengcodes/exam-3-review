window.addEventListener("load", function() {
    console.log('page loaded');
    document.querySelector("h1").style.color = '#A020F0';
})

window.addEventListener("dblclick", function() {
    var date = new Date();
    this.alert(date)
})

document.querySelector('#toggle').addEventListener("click", function() {
    
    let checkbox = document.querySelector('#toggle')
    let emailBox = document.querySelector('#emailBox')
    if (checkbox.checked) {
        emailBox.style.display = 'block';
        console.log('checked')
    }
    else {
        emailBox.style.display = 'none';
        console.log('unchecked')
    }

})