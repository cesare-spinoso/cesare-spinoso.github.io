function HideShowElement(eltId) {
    var x = document.getElementById(eltId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}