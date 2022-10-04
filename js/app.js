document.getElementById="cuadro";
document.getElementById="h1";
    document.body.style.backgroundColor = "aquamarine";
    document.body.style.fontFamily = "Arial";
    document.body.style.color = "red";
    cuadro.style.border = "3px solid";
    h1.style.color = "blue";

    const cambioColor = setInterval(setColor, 30000);
    function setColor() {
        document.body.style.backgroundColor = document.body.style.backgroundColor == "yellow" ? "pink" : "yellow";
    }
