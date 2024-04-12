document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("openWindowLink").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("12labtext.html", "_blank", "width=400,height=400");
    });
});
