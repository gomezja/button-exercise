/*****************************************************/
/* BUTTON 6
/*****************************************************/
document.getElementById("color-btn").addEventListener("click", function() {
    this.classList.toggle("btn-6-clicked");

    if(this.innerHTML === "Custom Button 6") {
        this.innerHTML = "Clicked";
    } else {
        this.innerHTML = "Custom Button 6";
    }
});